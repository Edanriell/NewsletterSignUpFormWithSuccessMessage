import { IsEmail, IsIn, IsNotEmpty } from "class-validator";

export class CreateMessageRequestDto {
	@IsNotEmpty({ message: "First name is required." })
	firstName: string;

	@IsNotEmpty({ message: "Last name is required." })
	lastName: string;

	@IsEmail({}, { message: "Invalid email format." })
	emailAddress: string;

	@IsIn(["General Enquiry", "Support Request"], { message: "Invalid query type." })
	queryType: string;

	@IsNotEmpty({ message: "Message is required." })
	message: string;

	@IsIn(["true"], { message: "Service agreement must be accepted." })
	serviceAgreement: string;
}
