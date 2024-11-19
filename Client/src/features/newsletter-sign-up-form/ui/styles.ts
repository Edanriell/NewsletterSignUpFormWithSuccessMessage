import styled from "styled-components";

export const StyledNewsletterSignUpForm = styled.article`
	position: relative;
	display: none !important;

	@media (width >= 1440px) {
		border-radius: 36rem;
		max-width: 928rem;
		box-shadow: 0 15rem 60rem 0 rgba(0, 0, 0, 0.25);
		background: var(--white);
		display: flex;
		flex-direction: row-reverse;
		overflow: hidden;
	}
`;

export const NewsletterSignUpFormImage = styled.div`
	position: relative;
	border: none;
	border-radius: 0 0 16rem 16rem;
	width: 100%;
	height: 284rem;
	background: linear-gradient(225deg, #ff6a3a 0%, #ff527b 100%);
	overflow: hidden;

	@media (width >= 1440px) {
		margin: 24rem;
		max-width: 400rem;
		max-height: 593rem;
		height: 100%;
		border-radius: 16rem;
	}
`;

export const NewsletterSignUpFormContent = styled.div`
	padding: 40rem 24rem;

	@media (width >= 1440px) {
		padding: 97rem 40rem 98rem 64rem;
	}
`;

export const NewsletterSignUpFormTitle = styled.h2`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 40rem;
	line-height: 100%;
	color: var(--dark-navy);
	margin-bottom: 24rem;

	@media (width >= 1440px) {
		font-size: 56rem;
	}
`;

export const NewsletterSignUpFormText = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 16rem;
	line-height: 150%;
	color: var(--dark-navy);
	margin-bottom: 24rem;
`;

export const NewsletterSignUpFormSubscriptionBenefitsList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 10rem;
	margin-bottom: 40rem;
`;

export const NewsletterSignUpFormSubscriptionBenefitsListItem = styled.li`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	column-gap: 16rem;
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 16rem;
	line-height: 150%;
	color: var(--dark-navy);
`;

export const SignUpFormFieldset = styled.fieldset`
	margin: unset;
	padding: unset;
	border: unset;
`;

export const SignUpFormLegend = styled.legend`
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
`;

export const SignUpFormField = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8rem;
	margin-bottom: 24rem;
	position: relative;
`;

export const SignUpFormLabel = styled.label`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 12rem;
	line-height: 150%;
	color: var(--dark-navy);
`;

export const StyledNewsletterSignUpFormSubscriptionSuccessMessage = styled.article`
	position: relative;
	padding: 149rem 24rem 40rem 24rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;

	@media (width >= 1440px) {
		border-radius: 36rem;
		max-width: 504rem;
		box-shadow: 0 15rem 60rem 0 rgba(0, 0, 0, 0.25);
		background: var(--white);
		padding: 48rem 64rem 64rem 64rem;
		min-height: unset;
		justify-content: unset;
	}
`;

export const StyledNewsletterSignUpFormSubscriptionSuccessMessageContent = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledNewsletterSignUpFormSubscriptionSuccessMessageTitle = styled.h2`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 40rem;
	line-height: 100%;
	color: var(--dark-navy);
	margin-top: 40rem;

	@media (width >= 1440px) {
		font-size: 56rem;
	}
`;

export const StyledNewsletterSignUpFormSubscriptionSuccessMessageText = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 400;
	font-size: 16rem;
	line-height: 150%;
	color: var(--dark-navy);
	margin-top: 24rem;

	> strong {
		font-family: var(--font-family), sans-serif;
		font-size: 16rem;
		line-height: 150%;
		color: var(--dark-navy);
		font-weight: 700;
	}

	@media (width >= 1440px) {
		margin-bottom: 40rem;
	}
`;
