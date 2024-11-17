import { FC } from "react";

import styles from "./styles.module.less";

type SpinnerProps = {
	color: string;
	size?: number;
};

export const Spinner: FC<SpinnerProps> = ({ color, size = 20 }) => {
	const bars = Array(12).fill(0);

	return (
		<div
			className={styles["spinner__wrapper"]}
			style={{
				["--spinner-size"]: `${size}px`,
				["--spinner-color"]: color
			}}
		>
			<div className={styles["spinner"]}>
				{bars.map((_, i) => (
					<div className={styles["spinner__bar"]} key={`spinner-bar-${i}`} />
				))}
			</div>
		</div>
	);
};
