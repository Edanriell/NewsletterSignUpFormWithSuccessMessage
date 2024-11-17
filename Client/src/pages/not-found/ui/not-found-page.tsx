import { FC } from "react";

import { Link } from "@shared/ui/link/ui";

import { StyledNotFoundPage, StyledNotFoundPageText, StyledNotFoundPageTitle } from "./styles";

export const NotFoundPage: FC = () => {
	return (
		<StyledNotFoundPage>
			<StyledNotFoundPageTitle>404</StyledNotFoundPageTitle>
			<StyledNotFoundPageText>
				Sorry, the page you are looking for does not exist.
			</StyledNotFoundPageText>
			<Link href="/" target="_self">
				Go Back to Home
			</Link>
		</StyledNotFoundPage>
	);
};
