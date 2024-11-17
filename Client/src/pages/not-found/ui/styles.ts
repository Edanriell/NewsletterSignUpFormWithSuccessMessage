import styled from "styled-components";

export const StyledNotFoundPage = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 20rem;
	padding-right: 16rem;
	padding-left: 16rem;

	@media (width > 768px) {
		padding-right: 40rem;
		padding-left: 40rem;
	}

	@media (width > 1440px) {
		padding-right: 160rem;
		padding-left: 160rem;
	}
`;

export const StyledNotFoundPageTitle = styled.h1`
	font-family: var(--font-family), sans-serif;
	font-weight: 600;
	font-size: 64rem;
	line-height: 90%;
	letter-spacing: -0.05em;
	color: #fff;
`;

export const StyledNotFoundPageText = styled.p`
	font-family: var(--second-family), sans-serif;
	font-weight: 200;
	font-size: 28rem;
	line-height: 90%;
	letter-spacing: -0.04em;
	color: #fff;
	text-align: center;
	margin-bottom: 20rem;
`;
