# @chneau/hyperaccounts

A TypeScript client for the HyperAccounts REST API for Sage 50cloud, featuring
type-safe requests and responses using Zod.

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
			unitPrice: 15.50,
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
