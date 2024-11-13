import { Module } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";
import { NewslettersService } from "./services";
import { NewslettersController } from "./controllers";

@Module({
	controllers: [NewslettersController],
	providers: [NewslettersService, PrismaService]
})
export class NewslettersModule {}
