import { FC } from "react";

import { NewsletterSignUpForm } from "@features/newsletter-sign-up-form/ui";

import { MainLayout } from "@widgets/layouts/main/ui";

import { HomePageTitle } from "./styles";

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<HomePageTitle className="visually-hidden">
				Newsletter sign-up form with success message
			</HomePageTitle>
			<NewsletterSignUpForm />
		</MainLayout>
	);
};
