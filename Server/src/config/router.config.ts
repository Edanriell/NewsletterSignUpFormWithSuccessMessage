import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { MessagesModule } from "../modules";

@Module({
	imports: [
		MessagesModule,
		RouterModule.register([
			{
				path: "",
				children: [MessagesModule]
			}
		])
	]
})
export class RouterConfigModule {}
