import { FC, ReactNode } from "react";

import { MainLayoutStyled } from "./styles";

type MainLayoutProps = {
	children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	return <MainLayoutStyled>{children}</MainLayoutStyled>;
};
