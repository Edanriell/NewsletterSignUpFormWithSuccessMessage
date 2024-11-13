import { Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service";
import { LoggerService } from "../../logger/services";
import { CreateMessageRequestDto, MessageDto } from "../dtos";
import { Message } from "../models";

@Injectable()
export class MessagesService {
	private readonly logger = new LoggerService(MessagesService.name);

	constructor(private prisma: PrismaService) {}

	async getMessage(id: number): Promise<MessageDto> {
		const message = await this.prisma.message.findUnique({
			where: { id }
		});

		if (!message) {
			this.logger.error(
				`Message with ID ${id} was not found in the database.`,
				MessagesService.name
			);
			throw new NotFoundException(`Message was not found.`, {
				cause: new Error(`Message with ID ${id} was not located in the database.`),
				description: `The requested message with ID ${id} does not exist in the database. Please verify the ID and try again.`
			});
		}

		return new MessageDto(message);
	}

	async getMessages(): Promise<MessageDto[]> {
		const messagesCount = await this.prisma.message.count();

		if (messagesCount === 0) {
			this.logger.error("No messages were found in the database.", MessagesService.name);
			throw new NotFoundException("No messages were found.", {
				cause: new Error("Database query returned zero results."),
				description:
					"The system could not retrieve any messages because the database is currently empty."
			});
		}

		const messages = await this.prisma.message.findMany();

		return messages.map((message: Message) => new MessageDto(message));
	}

	async createMessage(createMessageDto: CreateMessageRequestDto) {
		const { firstName, lastName, emailAddress, queryType, message, serviceAgreement } =
			createMessageDto;

		const newMessage = await this.prisma.message.create({
			data: {
				firstName,
				lastName,
				emailAddress,
				queryType,
				message,
				serviceAgreement
			}
		});

		console.log(newMessage);

		this.logger.log(`Message successfully created with ID ${newMessage.id}.`, MessagesService.name);

		return new MessageDto(newMessage);
	}

	// async createMessage({
	// 	firstName,
	// 	lastName,
	// 	emailAddress,
	// 	queryType,
	// 	message,
	// 	serviceAgreement
	// }: CreateMessageRequestDto): Promise<MessageDto> {
	// 	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	//
	// 	if (firstName.length < 1) {
	// 		this.logger.error(`Invalid firstName provided: ${firstName}.`, MessagesService.name);
	// 		throw new BadRequestException(`First name is required`, {
	// 			cause: new Error(`Provided first name: ${firstName} is too short.`),
	// 			description: `The first name ${firstName} is not provided or is too short. Please provide a correct email address and try again.`
	// 		});
	// 	}
	//
	// 	if (lastName.length < 1) {
	// 		this.logger.error(`Invalid lastName provided: ${lastName}.`, MessagesService.name);
	// 		throw new BadRequestException(`Last name is required`, {
	// 			cause: new Error(`Provided last name: ${lastName} is too short.`),
	// 			description: `The last name ${lastName} is not provided or is too short. Please provide a correct email address and try again.`
	// 		});
	// 	}
	//
	// 	if (!emailRegex.test(emailAddress)) {
	// 		this.logger.error(`Invalid email format provided: ${emailAddress}.`, MessagesService.name);
	// 		throw new BadRequestException(`Invalid email format: ${emailAddress}.`, {
	// 			cause: new Error(
	// 				`Provided email: ${emailAddress} does not match the standard email format.`
	// 			),
	// 			description: `The email address ${emailAddress} is not in a valid format. Please provide a correct email address and try again.`
	// 		});
	// 	}
	//
	// 	if (queryType !== "General Enquiry" && queryType !== "Support Request") {
	// 		this.logger.error(`Invalid query type provided: ${queryType}.`, MessagesService.name);
	// 		throw new BadRequestException(`Invalid query type: ${queryType}.`, {
	// 			cause: new Error(
	// 				`Provided query type: ${queryType} does not match 'General Enquiry' or 'Support Request'.`
	// 			),
	// 			description: `The query type ${queryType} is not in a valid. Please provide a correct email address and try again.`
	// 		});
	// 	}
	//
	// 	if (message.length < 1) {
	// 		this.logger.error(`Invalid message provided: ${message}.`, MessagesService.name);
	// 		throw new BadRequestException(`Message is required`, {
	// 			cause: new Error(`Provided message: ${message} is too short.`),
	// 			description: `The message ${message} is not provided or is too short. Please provide a correct email address and try again.`
	// 		});
	// 	}
	//
	// 	if (serviceAgreement !== "true") {
	// 		this.logger.error(
	// 			`Invalid service agreement provided: ${serviceAgreement}.`,
	// 			MessagesService.name
	// 		);
	// 		throw new BadRequestException(`Service agreement is required`, {
	// 			cause: new Error(`Provided service agreement: ${serviceAgreement} is invalid.`),
	// 			description: `The service agreement ${serviceAgreement} is not provided or is invalid. Please provide a correct email address and try again.`
	// 		});
	// 	}
	//
	// 	const newMessage = await this.prisma.message.create({
	// 		firstName,
	// 		lastName,
	// 		emailAddress,
	// 		queryType,
	// 		message,
	// 		serviceAgreement
	// 	});
	//
	// 	this.logger.log(`Message successfully created with ID ${newMessage.id}.`, MessagesService.name);
	//
	// 	return new MessageDto(newMessage);
	// }

	async deleteMessage(id: number): Promise<void> {
		const message = await this.prisma.message.findUnique({
			where: { id }
		});

		if (!message) {
			this.logger.error(
				`Message with ID ${id} was not found in the database.`,
				MessagesService.name
			);
			throw new NotFoundException(`Message was not found.`, {
				cause: new Error(`Message with ID ${id} does not exist in the database.`),
				description: `The requested message with ID ${id} could not be deleted because it does not exist in the database. Please verify the ID and try again.`
			});
		}

		await this.prisma.message.delete({
			where: { id }
		});

		this.logger.log(`Message with ID ${id} was successfully deleted.`, MessagesService.name);
	}
}
