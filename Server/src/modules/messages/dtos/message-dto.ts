import { type Message } from "../models";

export class MessageDto {
	public id: number;
	public firstName: string;
	public lastName: string;
	public emailAddress: string;
	public queryType: string;
	public message: string;
	public serviceAgreement: string;

	constructor({
		id,
		firstName,
		lastName,
		emailAddress,
		queryType,
		message,
		serviceAgreement
	}: Message) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailAddress = emailAddress;
		this.queryType = queryType;
		this.message = message;
		this.serviceAgreement = serviceAgreement;
	}
}
