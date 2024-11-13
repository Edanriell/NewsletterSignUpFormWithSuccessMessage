import { IsEmail } from "class-validator";

export class CreateNewsletterRequestDto {
	@IsEmail({}, { message: "Invalid email format." })
	emailAddress: string;
}
