import { FC } from "react";
import { motion } from "framer-motion";

export const NewsletterSignUpFormSubscriptionSuccessIcon: FC = () => {
	return (
		<motion.svg
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			style={{ flex: "0 0 auto" }}
			shapeRendering="geometricPrecision"
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="32" cy="32" r="32" fill="url(#paint0_linear_26_846)" />
			<path d="M18.2856 34.6855L26.6198 42.6667L45.7142 24.381" stroke="white" strokeWidth="4" />
			<defs>
				<linearGradient
					id="paint0_linear_26_846"
					x1="64"
					y1="-3.47137e-06"
					x2="28.8976"
					y2="77.1484"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#FF6A3A" />
					<stop offset="1" stopColor="#FF527B" />
				</linearGradient>
			</defs>
		</motion.svg>
	);
};
