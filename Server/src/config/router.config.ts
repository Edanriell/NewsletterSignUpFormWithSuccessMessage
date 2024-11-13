import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { NewslettersModule } from "../modules";

@Module({
	imports: [
		NewslettersModule,
		RouterModule.register([
			{
				path: "",
				children: [NewslettersModule]
			}
		])
	]
})
export class RouterConfigModule {}
