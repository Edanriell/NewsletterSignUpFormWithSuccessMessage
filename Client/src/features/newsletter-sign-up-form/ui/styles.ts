import styled from "styled-components";

export const StyledNewsletterSignUpForm = styled.article`
	position: relative;

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

export const SignUpForm = styled.form`
	position: relative;
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

export const SignUpFormEmailInput = styled.input`
	border: 1rem solid var(--grey-25);
	border-radius: 8rem;
	width: 100%;
	background: #fff;
	padding: 16rem 24rem;
	font-family: var(--second-family), sans-serif;
	font-weight: 400;
	font-size: 16rem;
	line-height: 150%;
	color: var(--dark-navy);

	&::placeholder {
		font-family: var(--font-family), sans-serif;
		font-weight: 400;
		font-size: 16rem;
		line-height: 150%;
		color: var(--dark-navy);
		opacity: 0.5;
	}
`;

export const Button = styled.button`
	border-radius: 8rem;
	width: 100%;
	background: var(--dark-navy);
	text-align: center;
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 16rem;
	line-height: 150%;
	color: var(--white);
	padding: 18rem 0 14rem 0;
	cursor: pointer;
`;

export const ErrorMessage = styled.p`
	font-family: var(--font-family), sans-serif;
	font-weight: 700;
	font-size: 12rem;
	line-height: 150%;
	color: var(--vermellion);
	position: absolute;
	top: 0;
	right: 0;
`;
