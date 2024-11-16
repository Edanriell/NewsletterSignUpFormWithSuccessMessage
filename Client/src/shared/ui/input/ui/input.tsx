import { FC } from "react";
import { Field } from "formik";

import styles from "./styles.module.less";

export type InputProps = {
	id: string;
	name: string;
	type: "email";
	placeholder?: string;
	isInputValid?: boolean;
};

export const Input: FC<InputProps> = ({
	id,
	name,
	type,
	placeholder = "",
	isInputValid = true
}) => {
	switch (type) {
		case "email":
			return (
				<Field
					id={id}
					name={name}
					type="email"
					placeholder={placeholder}
					className={isInputValid ? styles["email-input"] : styles["email-input--state--invalid"]}
				/>
			);
		default:
			return null;
	}
};
