import {
	Body,
	Controller,
	Delete,
	Get,
	Ip,
	Param,
	ParseIntPipe,
	Post,
	ValidationPipe
} from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";

import { MessagesService } from "../services";
import { LoggerService } from "../../logger/services";
import { CreateMessageRequestDto } from "../dtos";

@Controller()
export class MessagesController {
	private readonly logger = new LoggerService(MessagesController.name);

	constructor(private readonly messagesService: MessagesService) {}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Get("message/:id")
	async getMessage(@Param("id", ParseIntPipe) id: number, @Ip() ip: string) {
		this.logger.log(`Message data requested for ID ${id} from IP: ${ip}`, MessagesController.name);
		return await this.messagesService.getMessage(id);
	}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Get("messages")
	async getMessages(@Ip() ip: string) {
		this.logger.log(`Messages data requested from ip:\t${ip}`, MessagesController.name);
		return await this.messagesService.getMessages();
	}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Post("message")
	async createMessage(
		@Body(new ValidationPipe())
		createMessageDto: CreateMessageRequestDto,
		@Ip() ip: string
	) {
		this.logger.log(`Create message request received from IP: ${ip}`, MessagesController.name);
		return await this.messagesService.createMessage(createMessageDto);
	}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Delete("message/:id")
	async deleteMessage(@Param("id", ParseIntPipe) id: number, @Ip() ip: string) {
		this.logger.log(
			`Delete message request for ID ${id} received from IP: ${ip}`,
			MessagesController.name
		);
		return await this.messagesService.deleteMessage(id);
	}
}
