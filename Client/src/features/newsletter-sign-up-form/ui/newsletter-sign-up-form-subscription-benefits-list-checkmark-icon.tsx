import { FC } from "react";
import { motion } from "framer-motion";

export const NewsletterSignUpFormSubscriptionBenefitsListCheckmarkIcon: FC = () => {
	return (
		<motion.svg
			layout
			style={{ flex: "0 0 auto" }}
			width="21"
			height="21"
			viewBox="0 0 21 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
			<path d="M6 11.3812L8.73464 14L15 8" stroke="white" strokeWidth="2" />
		</motion.svg>
	);
};
