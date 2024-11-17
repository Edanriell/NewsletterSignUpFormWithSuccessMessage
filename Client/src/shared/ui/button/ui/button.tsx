import type { ComponentPropsWithoutRef } from "react";
import { FC, ReactNode } from "react";
import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";

import styles from "./styles.module.less";

type ButtonProps = {
	type?: "submit" | "reset" | "button";
	children?: ReactNode;
} & ComponentPropsWithoutRef<"button"> &
	MotionProps;

export const Button: FC<ButtonProps> = ({ type = "button", children, ...rest }) => {
	return (
		<motion.button
			{...rest}
			initial={{ background: "linear-gradient(225deg, #242742 0%, #242742 100%)" }}
			whileHover={{
				scale: 1.05,
				background: "linear-gradient(225deg, #ff6a3a 0%, #ff527b 100%)",
				boxShadow: "0 16px 32px 0 rgba(255, 97, 85, 0.5)"
			}}
			whileTap={{
				scale: 0.95,
				background: "linear-gradient(225deg, #ff6a3a 0%, #ff527b 100%)",
				boxShadow: "0 16px 32px 0 rgba(255, 97, 85, 0.5)"
			}}
			transition={{ type: "spring", duration: 0.3, bounce: 0 }}
			type={type}
			className={styles.button}
		>
			{children}
		</motion.button>
	);
};
