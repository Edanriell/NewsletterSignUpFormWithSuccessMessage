import { FC, ReactNode } from "react";

import { StyledMainLayout } from "./styles";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return <StyledMainLayout>{children}</StyledMainLayout>;
};
