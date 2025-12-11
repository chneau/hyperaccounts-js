Read the file `api.json`.

From this file, complete the client in index.ts. For each API call, a zod schema
will validate the input and output.

```ts
import { Axios } from "axios";
import z from "zod";

const HAConfigSchema = z.object({
	baseURL: z.url(),
	authToken: z.string().min(1),
});
type HAConfig = z.infer<typeof HAConfigSchema>;
const ExampleInputSchema = z.object({
	exampleField: z.string(),
});
type ExampleInput = z.infer<typeof ExampleInputSchema>;
const ExampleOutputSchema = z.object({
	resultField: z.string(),
});
type ExampleOutput = z.infer<typeof ExampleOutputSchema>;
export class HyperAccountsClient {
	axios: Axios;
	constructor(config: HAConfig) {
		config = HAConfigSchema.parse(config);
		this.axios = new Axios({
			baseURL: config.baseURL,
			headers: {
				"Content-Type": "application/json",
				AuthToken: config.authToken,
			},
		});
	}
	async exampleMethod(input: ExampleInput): Promise<ExampleOutput> {
		input = ExampleInputSchema.parse(input);
		const response = await this.axios.post("/example-endpoint", input);
		const output = ExampleOutputSchema.parse(response.data);
		return output;
	}
}
```

Do not create a generator, just write the client directly based on the provided
`api.json`.
