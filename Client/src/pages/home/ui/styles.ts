import styled from "styled-components";

export const HomePageTitle = styled.h1`
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

export const HomePageWrapper = styled.div`
	position: relative;

	@media (width >= 1440px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}
`;
