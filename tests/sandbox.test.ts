import { describe, expect, test } from "bun:test";
import { HyperAccountsClient, HyperAccountsError } from "../index";

/**
 * Live checks against a HyperAccounts sandbox. Skipped unless both
 * HYPERACCOUNTS_SANDBOX_BASE_URL and HYPERACCOUNTS_SANDBOX_AUTH_TOKEN are set —
 * copy `.env.example` to `.env` (gitignored) to run them.
 *
 * The sandbox is shared, so a 409 held by someone else is legitimate; these
 * assert compatibility and error typing, not queueing. Queueing is covered
 * deterministically in `client.test.ts`.
 */

const baseURL = Bun.env.HYPERACCOUNTS_SANDBOX_BASE_URL;
const authToken = Bun.env.HYPERACCOUNTS_SANDBOX_AUTH_TOKEN;
const configured = typeof baseURL === "string" && typeof authToken === "string";

const sandboxClient = () => {
	if (!baseURL || !authToken) {
		throw new Error("sandbox credentials are not configured");
	}
	return new HyperAccountsClient({ baseURL, authToken, timeoutMs: 30_000 });
};

describe("sandbox", () => {
	test.skipIf(!configured)("reads the API status", async () => {
		const status = await sandboxClient().readApiStatus();
		expect(status.success).toBe(true);
		expect(typeof status.code).toBe("number");
		expect(typeof status.response?.apiVersion).toBe("string");
	});

	test.skipIf(!configured)("reads the tax codes", async () => {
		const taxCodes = await sandboxClient().readTaxCodes();
		expect(taxCodes.success).toBe(true);
		expect(Array.isArray(taxCodes.results)).toBe(true);
		expect(taxCodes.results.length).toBeGreaterThan(0);
	});

	test.skipIf(!configured)(
		"concurrent calls to one endpoint never throw an untyped error",
		async () => {
			const outcomes = await Promise.all(
				[1, 2, 3, 4].map(async (n) => {
					try {
						await sandboxClient().readTaxCodes();
						return `#${n} ok`;
					} catch (error) {
						// A conflict from another user of the shared sandbox must still
						// arrive typed (regression: it used to surface as a ZodError).
						if (error instanceof HyperAccountsError) {
							return `#${n} typed ${error.status}`;
						}
						return `#${n} unexpected ${String(error)}`;
					}
				}),
			);
			expect(
				outcomes.filter((outcome) => outcome.includes("unexpected")),
			).toEqual([]);
			expect(outcomes.some((outcome) => outcome.endsWith("ok"))).toBe(true);
		},
	);
});
