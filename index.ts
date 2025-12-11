import { Axios } from "axios";
import z from "zod";

const HAConfigSchema = z.object({
	baseURL: z.url(),
	authToken: z.string().min(1),
});
type HAConfig = z.infer<typeof HAConfigSchema>;
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
}
