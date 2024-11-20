import { ComponentPropsWithoutRef, FC, ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion, MotionProps } from "framer-motion";

import { Spinner } from "@shared/ui/spinner/ui";

import styles from "./styles.module.less";

type ButtonProps = {
	state?: string;
	type?: "submit" | "reset" | "button";
	children?: ReactNode;
} & ComponentPropsWithoutRef<"button"> &
	MotionProps;

export const Button: FC<ButtonProps> = ({ state, type = "button", children, ...rest }) => {
	const [buttonState, setButtonState] = useState<"idle" | "loading" | "success" | "failure">(
		"idle"
	);

	const buttonContent = {
		idle: children,
		loading: <Spinner size={23} color="rgba(255, 255, 255)" />,
		success: "Subscribed successfully!",
		failure: "Subscription failed!"
	};

	useEffect(() => {
		if (state === "idle") setButtonState("idle");
		if (state === "loading") setButtonState("loading");
		if (state === "success") setButtonState("success");
		if (state === "failure") setButtonState("failure");
	}, [state]);

	return (
		<motion.button
			layout
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
			<AnimatePresence mode="popLayout" initial={false}>
				<motion.span
					className={styles["button__content"]}
					transition={{ type: "spring", duration: 0.3, bounce: 0 }}
					initial={{ opacity: 0, y: -25 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 25 }}
					key={buttonState}
				>
					{buttonContent[buttonState]}
				</motion.span>
			</AnimatePresence>
		</motion.button>
	);
};
