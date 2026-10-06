# @chneau/hyperaccounts

A TypeScript client for the HyperAccounts REST API for Sage 50cloud, featuring
type-safe requests and responses using Zod.

> **Caution**: This API client has been auto-generated through AI.

- **GitHub Repository**: https://github.com/chneau/hyperaccounts-js
- **NPM Package**: https://www.npmjs.com/package/@chneau/hyperaccounts

<!--
From https://sage-50-accounts-api-v1-docs.hyperext.com/
Get the json file starting with _postman_id to use for AI code generation.
 -->

## Installation

```bash
npm install @chneau/hyperaccounts
# or
bun add @chneau/hyperaccounts
# or
yarn add @chneau/hyperaccounts
# or
pnpm add @chneau/hyperaccounts
```

## Getting Started

Initialize the client with your HyperAccounts base URL and authentication token.

```typescript
import { HyperAccountsClient } from "@chneau/hyperaccounts";

const client = new HyperAccountsClient({
	baseURL: "https://your-hyperaccounts-api-url.com",
	authToken: "YOUR_AUTH_TOKEN",
});
```

## Usage

All API methods return a Promise that resolves to a typed response validated by
Zod schemas.

### Check API Status

```typescript
const status = await client.readApiStatus();
console.log(status);
```

### Search for a Customer

```typescript
const customers = await client.searchCustomer([
	{
		field: "name",
		type: "like",
		value: "Acme%",
	},
]);

if (customers.success && customers.results) {
	customers.results.forEach((customer) => {
		console.log(`Found customer: ${customer.name} (${customer.accountRef})`);
	});
}
```

### Read a Specific Customer

```typescript
const customer = await client.readCustomer({ customer: "ACME001" });
console.log(customer.response);
```

### Create a Sales Order

```typescript
const newOrder = await client.createSalesOrder({
	customerAccountRef: "ACME001",
	orderDate: "2023-10-27",
	invoiceItems: [
		{
			stockCode: "WIDGET-01",
			quantity: 10,
			unitPrice: 15.5,
			description: "Premium Widget",
			taxCode: 1,
		},
	],
});

if (newOrder.success) {
	console.log(`Order created successfully: ${newOrder.response}`);
}
```

## Features

- **Type-Safe**: Full TypeScript definitions for inputs and outputs.
- **Runtime Validation**: Uses [Zod](https://zod.dev) to validate API responses,
  ensuring your application handles data correctly.
- **Promise-Based**: Modern async/await API.
- **Comprehensive Coverage**: Supports a wide range of HyperAccounts endpoints
  including Company Settings, Customers, Suppliers, Products, Stock, Sales
  Orders, Purchase Orders, and more.

## Concurrency, Errors and Timeouts

HyperAccounts runs **one process per operation** at a time. A second concurrent
call for the same operation answers:

```
HTTP 409
{"Message":"A Get Customer process is already running."}
```

The client therefore **queues calls per instance and operation**: concurrent
calls for the same operation wait their turn, while different operations still
run concurrently. All clients sharing a base URL share this queue, so building a
client per request (as server routes do) is safe.

Failures are thrown as `HyperAccountsError`, which carries the HTTP status and
the response body — including when the API answers `200` with a body that is not
the `{ success, code, ... }` envelope:

```typescript
import { HyperAccountsClient, HyperAccountsError } from "@chneau/hyperaccounts";

try {
	await client.readCustomer({ customer: "ACME001" });
} catch (error) {
	if (error instanceof HyperAccountsError && error.status === 409) {
		// "process is already running" — retry shortly, or let the client queue it
	}
}
```

`timeoutMs` (default `120000`) bounds each request. It also bounds how long a
queued call waits for the operation ahead of it, so a stuck request cannot stall
a queue.

## Testing

```bash
bun test
```

`tests/client.test.ts` is deterministic — it runs a local fake of the API and
covers queueing (per instance, per endpoint, including ids in the path) and
error typing. `tests/sandbox.test.ts` runs against a real HyperAccounts sandbox
and is skipped unless credentials are present:

```bash
cp .env.example .env   # then fill in the sandbox URL and token
```

`.env` is gitignored — never commit credentials.

## License

MIT
