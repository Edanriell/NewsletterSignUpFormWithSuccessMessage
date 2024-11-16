import { FC, ReactNode } from "react";

import styles from "./styles.module.less";

type ButtonProps = {
	type?: "submit" | "reset" | "button";
	children?: ReactNode;
};

export const Button: FC<ButtonProps> = ({ type = "button", children }) => {
	return (
		<button type={type} className={styles.button}>
			{children}
		</button>
	);
};
