import { type Newsletter } from "../models";

export class NewsletterDto {
	public id: number;
	public emailAddress: string;

	constructor({ id, emailAddress }: Newsletter) {
		this.id = id;
		this.emailAddress = emailAddress;
	}
}
