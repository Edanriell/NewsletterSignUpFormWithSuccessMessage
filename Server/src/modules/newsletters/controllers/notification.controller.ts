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

import { LoggerService } from "../../logger/services";
import { CreateNewsletterRequestDto } from "../dtos";
import { NewslettersService } from "../services";

@Controller()
export class NewslettersController {
	private readonly logger = new LoggerService(NewslettersController.name);

	constructor(private readonly newslettersService: NewslettersService) {}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Get("newsletter/:id")
	async getNewsletter(@Param("id", ParseIntPipe) id: number, @Ip() ip: string) {
		this.logger.log(
			`Newsletter data requested for ID ${id} from IP: ${ip}`,
			NewslettersController.name
		);
		return await this.newslettersService.getNewsletter(id);
	}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Get("newsletters")
	async getNewsletters(@Ip() ip: string) {
		this.logger.log(`Newsletters data requested from ip:\t${ip}`, NewslettersController.name);
		return await this.newslettersService.getNewsletters();
	}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Post("newsletter")
	async createNewsletter(
		@Body(new ValidationPipe())
		createNewsletterDto: CreateNewsletterRequestDto,
		@Ip() ip: string
	) {
		this.logger.log(
			`Create newsletter request received from IP: ${ip}`,
			NewslettersController.name
		);
		return await this.newslettersService.createNewsletter(createNewsletterDto);
	}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Delete("newsletters/:id")
	async deleteNewsletter(@Param("id", ParseIntPipe) id: number, @Ip() ip: string) {
		this.logger.log(
			`Delete newsletter request for ID ${id} received from IP: ${ip}`,
			NewslettersController.name
		);
		return await this.newslettersService.deleteNewsletter(id);
	}
}
