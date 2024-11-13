import { Module } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";
import { MessagesService } from "./services";
import { MessagesController } from "./controllers";

@Module({
	controllers: [MessagesController],
	providers: [MessagesService, PrismaService]
})
export class MessagesModule {}
