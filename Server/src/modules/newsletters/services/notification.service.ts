import { Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service";
import { LoggerService } from "../../logger/services";
import { CreateNewsletterRequestDto, NewsletterDto } from "../dtos";
import { Newsletter } from "../models";

@Injectable()
export class NewslettersService {
	private readonly logger = new LoggerService(NewslettersService.name);

	constructor(private prisma: PrismaService) {}

	async getNewsletter(id: number): Promise<NewsletterDto> {
		const newsletter = await this.prisma.newsletter.findUnique({
			where: { id }
		});

		if (!newsletter) {
			this.logger.error(
				`Newsletter with ID ${id} was not found in the database.`,
				NewslettersService.name
			);
			throw new NotFoundException(`Newsletter was not found.`, {
				cause: new Error(`Newsletter with ID ${id} was not located in the database.`),
				description: `The requested newsletter with ID ${id} does not exist in the database. Please verify the ID and try again.`
			});
		}

		return new NewsletterDto(newsletter);
	}

	async getNewsletters(): Promise<NewsletterDto[]> {
		const newslettersCount = await this.prisma.newsletter.count();

		if (newslettersCount === 0) {
			this.logger.error(
				"No newsletters were found in the database.",
				NewslettersService.name
			);
			throw new NotFoundException("No newsletters were found.", {
				cause: new Error("Database query returned zero results."),
				description:
					"Could not retrieve any newsletters because the database is currently empty."
			});
		}

		const newsletters = await this.prisma.newsletter.findMany();

		return newsletters.map((newsletter: Newsletter) => new NewsletterDto(newsletter));
	}

	async createNewsletter(createNewsletterDto: CreateNewsletterRequestDto) {
		const { emailAddress } = createNewsletterDto;

		const newNewsletter = await this.prisma.newsletter.create({
			data: { emailAddress }
		});

		this.logger.log(
			`Newsletter was successfully created with ID ${newNewsletter.id}.`,
			NewslettersService.name
		);

		return new NewsletterDto(newNewsletter);
	}

	async deleteNewsletter(id: number): Promise<void> {
		const newsletter = await this.prisma.newsletter.findUnique({
			where: { id }
		});

		if (!newsletter) {
			this.logger.error(
				`Newsletter with ID ${id} was not found in the database.`,
				NewslettersService.name
			);
			throw new NotFoundException(`Newsletter was not found.`, {
				cause: new Error(`Newsletter with ID ${id} does not exist in the database.`),
				description: `The requested newsletter with ID ${id} could not be deleted because it does not exist in the database. Please verify the ID and try again.`
			});
		}

		await this.prisma.newsletter.delete({
			where: { id }
		});

		this.logger.log(
			`Newsletter with ID ${id} was successfully deleted.`,
			NewslettersService.name
		);
	}
}
