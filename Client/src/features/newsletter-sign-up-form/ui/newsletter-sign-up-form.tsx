import { FC, Fragment, useEffect, useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@shared/ui/button/ui";
import { Input } from "@shared/ui/input/ui";

import { NewsletterSignUpFormSvgImage } from "./newsletter-sign-up-form-svg-image";
import { NewsletterSignUpFormSubscriptionBenefitsListCheckmarkIcon } from "./newsletter-sign-up-form-subscription-benefits-list-checkmark-icon";
import { NewsletterSignUpFormSubscriptionSuccessIcon } from "./newsletter-sign-up-form-subscription-successIcon";

import { createNewsletter } from "../api";
import { extractErrorMessage } from "../lib/functions";
import { SignUpFormSchema } from "../model";

import styles from "./styles.module.less";

type SignUpFormValues = {
	emailAddress: string;
};

export const NewsletterSignUpForm: FC = () => {
	const [signUpFormState, setSignUpFormState] = useState<
		"idle" | "submitting" | "submitted" | "unsubmitted"
	>("idle");
	const [errorMessage, setErrorMessage] = useState<string>("");

	useEffect(() => {
		if (signUpFormState === "unsubmitted") {
			setTimeout(() => {
				setSignUpFormState("idle");
				setErrorMessage("");
			}, 3000);
		}
	}, [signUpFormState]);

	const buttonStateMap = {
		idle: "idle",
		submitting: "loading",
		submitted: "success",
		unsubmitted: "failure"
	};

	const initialSignUpFormValues: SignUpFormValues = { emailAddress: "" };

	const handleSignUpFormSubmit = async (
		values: SignUpFormValues,
		actions: FormikHelpers<{ emailAddress: string }>
	) => {
		setSignUpFormState("submitting");

		try {
			const { emailAddress } = values;
			await createNewsletter({ emailAddress });

			setSignUpFormState("submitted");
		} catch (error) {
			setErrorMessage(extractErrorMessage((error as Error).message));
			setSignUpFormState("unsubmitted");
		} finally {
			actions.setSubmitting(false);
		}
	};

	const handleDismissMessageButtonClick = () => {
		setSignUpFormState("idle");
	};

	return (
		<Fragment>
			{signUpFormState === "submitted" ? (
				<motion.article
					transition={{ type: "spring", duration: 0.5, bounce: 0 }}
					layout
					layoutId="newsletter-sign-up-form"
					className={styles["newsletter-sign-up-form-subscription-success-message"]}
				>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout>
						<NewsletterSignUpFormSubscriptionSuccessIcon />
						<motion.h2
							layout
							className={styles["newsletter-sign-up-form-subscription-success-message__title"]}
						>
							Thanks for subscribing!
						</motion.h2>
						<motion.p
							layout
							className={styles["newsletter-sign-up-form-subscription-success-message__text"]}
						>
							A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please
							open it and click the button inside to confirm your subscription
						</motion.p>
					</motion.div>
					<Button layout type="button" onClick={handleDismissMessageButtonClick}>
						Dismiss message
					</Button>
				</motion.article>
			) : (
				<motion.article
					transition={{ type: "spring", duration: 0.5, bounce: 0 }}
					layout
					layoutId="newsletter-sign-up-form"
					className={styles["newsletter-sign-up-form"]}
				>
					<Fragment>
						<motion.div
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className={styles["newsletter-sign-up-form__image-wrapper"]}
						>
							<NewsletterSignUpFormSvgImage />
						</motion.div>
					</Fragment>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						layout
						className={styles["newsletter-sign-up-form__content"]}
					>
						<motion.h2 layout className={styles["newsletter-sign-up-form__title"]}>
							Stay updated!
						</motion.h2>
						<motion.p layout className={styles["newsletter-sign-up-form__text"]}>
							Join 60,000+ product managers receiving monthly updates on:
						</motion.p>
						<motion.ul
							layout
							className={styles["newsletter-sign-up-form__subscription-benefits-list"]}
						>
							<motion.li
								className={styles["newsletter-sign-up-form__subscription-benefits-list-item"]}
							>
								<NewsletterSignUpFormSubscriptionBenefitsListCheckmarkIcon />
								Product discovery and building what matters
							</motion.li>
							<motion.li
								className={styles["newsletter-sign-up-form__subscription-benefits-list-item"]}
							>
								<NewsletterSignUpFormSubscriptionBenefitsListCheckmarkIcon />
								Measuring to ensure updates are a success
							</motion.li>
							<motion.li
								className={styles["newsletter-sign-up-form__subscription-benefits-list-item"]}
							>
								<NewsletterSignUpFormSubscriptionBenefitsListCheckmarkIcon />
								And much more!
							</motion.li>
						</motion.ul>
						<Formik
							initialValues={initialSignUpFormValues}
							onSubmit={handleSignUpFormSubmit}
							validationSchema={SignUpFormSchema}
						>
							{({ errors, touched, isSubmitting }) => (
								<Form>
									<motion.fieldset layout className={styles["sign-up-form__fieldset"]}>
										<motion.legend className={styles["sign-up-form__legend"]}>
											Subscribe to the Newsletter
										</motion.legend>
										<motion.div className={styles["sign-up-form__field"]}>
											<motion.label
												className={styles["sign-up-form__label"]}
												htmlFor="emailAddress"
											>
												Email address
											</motion.label>
											<Input
												id="emailAddress"
												name="emailAddress"
												type="email"
												placeholder="email@company.com"
												isInputValid={!(errors.emailAddress && touched.emailAddress)}
											/>
											<AnimatePresence>
												{errors.emailAddress && touched.emailAddress && (
													<motion.p
														initial={{ opacity: 0, x: -10 }}
														animate={{ opacity: 1, x: 0 }}
														exit={{ opacity: 0, x: -10 }}
														transition={{
															type: "spring",
															duration: 0.3,
															bounce: 0
														}}
														className={styles["error-message"]}
													>
														{errors.emailAddress}
													</motion.p>
												)}
												{!(errors.emailAddress && touched.emailAddress) &&
													signUpFormState === "unsubmitted" && (
														<motion.p
															initial={{ opacity: 0, x: -10 }}
															animate={{ opacity: 1, x: 0 }}
															exit={{ opacity: 0, x: -10 }}
															transition={{
																type: "spring",
																duration: 0.3,
																bounce: 0
															}}
															className={styles["error-message"]}
														>
															{errorMessage}
														</motion.p>
													)}
											</AnimatePresence>
										</motion.div>
										<Button
											layout
											type="submit"
											disabled={isSubmitting || signUpFormState === "unsubmitted"}
											state={buttonStateMap[signUpFormState]}
										>
											Subscribe to monthly newsletter
										</Button>
									</motion.fieldset>
								</Form>
							)}
						</Formik>
					</motion.div>
				</motion.article>
			)}
		</Fragment>
	);
};
