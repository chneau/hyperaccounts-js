import { describe, expect, test } from "bun:test";
import { HyperAccountsClient, HyperAccountsError } from "../index";

/**
 * Deterministic tests against a local fake of the HyperAccounts API. They cover
 * what the real service does to concurrent callers but will not show on demand:
 * a second call for the same operation on the same instance answers 409
 * "A <Operation> process is already running.".
 */

type FakeReply = { status: number; body: unknown };

type FakeApi = {
	origin: string;
	port: number;
	maxInFlight: Record<string, number>;
	maxTotal: () => number;
	/** Hold every request that arrives until `release()`, so overlap is observable. */
	hold: () => void;
	release: () => void;
	stop: () => void;
};

/** How every endpoint answers: `{ success, code, response }`. */
const envelope = (response: unknown) => ({
	success: true,
	code: 200,
	response,
	message: null,
});

/** How the collection endpoints answer: `{ results, success, code }`. */
const results = (items: unknown[]) => ({
	results: items,
	success: true,
	code: 200,
	response: null,
	message: null,
});

const apiStatus = () =>
	envelope({
		apiVersion: "1.29.2.0",
		sageVersion: "29.2.0.0",
		companyName: "Fake Co",
		sdoStatusOk: true,
		odbcStatusOk: true,
	});

/** Same normalisation the client queues on: API resource, ids dropped. */
const resourceOf = (path: string): string =>
	`/${path
		.split("/")
		.filter((segment) => segment.length > 0)
		.slice(0, 2)
		.join("/")}`;

const startFakeApi = (replies: Record<string, FakeReply> = {}): FakeApi => {
	const inFlight: Record<string, number> = {};
	const maxInFlight: Record<string, number> = {};
	let maxTotal = 0;
	let gate: Promise<void> = Promise.resolve();
	let openGate = () => {};
	const server = Bun.serve({
		port: 0,
		async fetch(request) {
			const path = new URL(request.url).pathname;
			const resource = resourceOf(path);
			inFlight[resource] = (inFlight[resource] ?? 0) + 1;
			maxInFlight[resource] = Math.max(
				maxInFlight[resource] ?? 0,
				inFlight[resource],
			);
			maxTotal = Math.max(
				maxTotal,
				Object.values(inFlight).reduce((sum, count) => sum + count, 0),
			);
			await gate;
			inFlight[resource] = (inFlight[resource] ?? 1) - 1;
			const reply = replies[path] ?? { status: 200, body: envelope(null) };
			return Response.json(reply.body, { status: reply.status });
		},
	});
	const boundPort = server.port;
	if (typeof boundPort !== "number") {
		throw new Error("fake API server did not bind a TCP port");
	}
	return {
		origin: `http://127.0.0.1:${boundPort}`,
		port: boundPort,
		maxInFlight,
		maxTotal: () => maxTotal,
		hold: () => {
			const held = Promise.withResolvers<void>();
			gate = held.promise;
			openGate = held.resolve;
		},
		release: () => openGate(),
		stop: () => server.stop(true),
	};
};

const withFakeApi = async <T>(
	replies: Record<string, FakeReply>,
	run: (api: FakeApi) => Promise<T>,
): Promise<T> => {
	const api = startFakeApi(replies);
	try {
		return await run(api);
	} finally {
		api.release();
		api.stop();
	}
};

/**
 * Yield to the event loop so requests the client already dispatched are accepted
 * before a concurrency assertion. No duration is involved: a serialised client
 * has nothing in flight to wait for, and an unserialised one sends everything in
 * the first tick.
 */
const flushEventLoop = async (): Promise<void> => {
	for (let turn = 0; turn < 16; turn += 1) {
		await Bun.sleep(0);
	}
};

/** Fake bodies need not satisfy the output schemas; only queueing is under test. */
const settle = async (call: () => Promise<unknown>): Promise<void> => {
	try {
		await call();
	} catch {
		// expected for the placeholder payloads
	}
};

const expectError = async (
	call: () => Promise<unknown>,
): Promise<HyperAccountsError> => {
	try {
		await call();
	} catch (error) {
		if (error instanceof HyperAccountsError) {
			return error;
		}
		throw new Error(`expected HyperAccountsError, received ${String(error)}`);
	}
	throw new Error("expected the call to fail");
};

const clientFor = (baseURL: string, timeoutMs = 5000) =>
	new HyperAccountsClient({ baseURL, authToken: "test-token", timeoutMs });

describe("serialisation", () => {
	test("same endpoint with query ids never runs in parallel", async () => {
		await withFakeApi({}, async (api) => {
			api.hold();
			const client = clientFor(api.origin);
			const calls = ["A", "B", "C", "D", "E", "F"].map((customer) =>
				settle(() => client.readCustomer({ customer })),
			);
			await flushEventLoop();
			expect(api.maxInFlight["/api/customer"]).toBe(1);
			api.release();
			await Promise.all(calls);
		});
	});

	test("same endpoint with ids in the path never runs in parallel", async () => {
		await withFakeApi({}, async (api) => {
			api.hold();
			const client = clientFor(api.origin);
			const calls = ["INV-1", "INV-2", "INV-3"].map((transactionNumber) =>
				settle(() => client.readDocumentLink({ transactionNumber })),
			);
			await flushEventLoop();
			expect(api.maxInFlight["/api/documentLink"]).toBe(1);
			api.release();
			await Promise.all(calls);
		});
	});

	test("different endpoints still run in parallel", async () => {
		await withFakeApi({}, async (api) => {
			api.hold();
			const client = clientFor(api.origin);
			const calls = [
				settle(() => client.readCustomer({ customer: "A" })),
				settle(() => client.readTaxCodes()),
				settle(() => client.readExchangeRates()),
			];
			await flushEventLoop();
			expect(api.maxTotal()).toBeGreaterThanOrEqual(2);
			api.release();
			await Promise.all(calls);
		});
	});

	test("different instances are independent", async () => {
		await withFakeApi({}, async (api) => {
			api.hold();
			// Same fake server, two origins: two HyperAccounts installs.
			const gcl = clientFor(`http://127.0.0.1:${api.port}`);
			const mdf = clientFor(`http://localhost:${api.port}`);
			const calls = [
				settle(() => gcl.readCustomer({ customer: "A" })),
				settle(() => mdf.readCustomer({ customer: "A" })),
			];
			await flushEventLoop();
			expect(api.maxInFlight["/api/customer"]).toBe(2);
			api.release();
			await Promise.all(calls);
		});
	});

	test("two spellings of one instance share one queue", async () => {
		await withFakeApi({}, async (api) => {
			api.hold();
			const plain = clientFor(`http://localhost:${api.port}`);
			const slashed = clientFor(`http://localhost:${api.port}/`);
			const upper = clientFor(`http://LOCALHOST:${api.port}`);
			const calls = [
				settle(() => plain.readCustomer({ customer: "A" })),
				settle(() => slashed.readCustomer({ customer: "A" })),
				settle(() => upper.readCustomer({ customer: "A" })),
			];
			await flushEventLoop();
			expect(api.maxInFlight["/api/customer"]).toBe(1);
			api.release();
			await Promise.all(calls);
		});
	});

	test("one instance with two tokens is still one queue", async () => {
		await withFakeApi({}, async (api) => {
			api.hold();
			const companyA = clientFor(api.origin);
			const companyB = new HyperAccountsClient({
				baseURL: api.origin,
				authToken: "another-company-token",
				timeoutMs: 5000,
			});
			const calls = [
				settle(() => companyA.readCustomer({ customer: "A" })),
				settle(() => companyB.readCustomer({ customer: "A" })),
			];
			await flushEventLoop();
			expect(api.maxInFlight["/api/customer"]).toBe(1);
			api.release();
			await Promise.all(calls);
		});
	});
});

describe("errors", () => {
	test("409 becomes a typed error carrying status and body", async () => {
		const message = "A Get Tax Codes process is already running.";
		await withFakeApi(
			{ "/api/taxCode": { status: 409, body: { Message: message } } },
			async (api) => {
				const error = await expectError(() =>
					clientFor(api.origin).readTaxCodes(),
				);
				expect(error.status).toBe(409);
				expect(error.message).toContain(message);
				expect(error.body).toEqual({ Message: message });
			},
		);
	});

	test("a 200 without the envelope becomes a typed error, not a ZodError", async () => {
		const message = "A Get Customer process is already running.";
		await withFakeApi(
			{ "/api/customer/": { status: 200, body: { Message: message } } },
			async (api) => {
				const error = await expectError(() =>
					clientFor(api.origin).readCustomer({ customer: "A" }),
				);
				expect(error.status).toBe(200);
				expect(error.message).toContain(message);
				expect(error.body).toEqual({ Message: message });
			},
		);
	});

	test("a connection failure becomes a typed error", async () => {
		const spare = Bun.serve({ port: 0, fetch: () => new Response("") });
		const deadOrigin = `http://127.0.0.1:${spare.port}`;
		spare.stop(true);
		const error = await expectError(() =>
			clientFor(deadOrigin, 2000).readApiStatus(),
		);
		expect(error.status).toBeUndefined();
		expect(error.message.length).toBeGreaterThan(0);
	});

	test("a valid envelope still resolves", async () => {
		await withFakeApi(
			{
				"/api/status": { status: 200, body: apiStatus() },
				"/api/taxCode": { status: 200, body: results([]) },
			},
			async (api) => {
				const client = clientFor(api.origin);
				const status = await client.readApiStatus();
				expect(status.success).toBe(true);
				expect(status.response?.apiVersion).toBe("1.29.2.0");
				const taxCodes = await client.readTaxCodes();
				expect(taxCodes.results).toEqual([]);
			},
		);
	});

	test("a bare string body is not mistaken for an error", async () => {
		await withFakeApi(
			{ "/api/system/version": { status: 200, body: "1.2.3" } },
			async (api) => {
				expect(await clientFor(api.origin).readApiVersion()).toBe("1.2.3");
			},
		);
	});

	test("the queue drains after an error", async () => {
		await withFakeApi(
			{
				"/api/taxCode": { status: 409, body: { Message: "busy" } },
				"/api/currency": { status: 200, body: results([]) },
			},
			async (api) => {
				const client = clientFor(api.origin);
				await expectError(() => client.readTaxCodes());
				const rates = await client.readExchangeRates();
				expect(rates.success).toBe(true);
			},
		);
	});
});
