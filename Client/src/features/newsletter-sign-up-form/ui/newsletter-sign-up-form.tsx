import { FC, Fragment } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";

import { useWindowSize } from "@shared/lib/hooks";

import { SignUpFormSchema } from "../model";
import styles from "./styles.module.less";

import {
	Button,
	NewsletterSignUpFormContent,
	NewsletterSignUpFormImage,
	NewsletterSignUpFormSubscriptionBenefitsList,
	NewsletterSignUpFormSubscriptionBenefitsListItem,
	NewsletterSignUpFormText,
	NewsletterSignUpFormTitle,
	SignUpFormField,
	SignUpFormFieldset,
	SignUpFormLabel,
	SignUpFormLegend,
	StyledNewsletterSignUpForm
} from "./styles";

type SignUpFormValues = {
	emailAddress: string;
};

const NewsletterSignUpFormSvgImage: FC = () => {
	const { width } = useWindowSize();

	return (
		<Fragment>
			{width && width >= 1440 ? (
				<svg
					style={{ border: "none", width: "100%", height: "100%", overflow: "hidden" }}
					width="400"
					shapeRendering="geometricPrecision"
					preserveAspectRatio="xMaxYMid slice"
					height="593"
					viewBox="0 0 400 593"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_26_56"
						style={{ maskType: "alpha" }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="400"
						height="593"
					>
						<rect width="400" height="593" rx="16" fill="url(#paint0_linear_26_56)" />
						<rect width="400" height="593" rx="16" stroke="#19182B" />
					</mask>
					<g mask="url(#mask0_26_56)">
						<rect width="400" height="593" rx="16" fill="url(#paint1_linear_26_56)" />
						<rect width="400" height="593" rx="16" stroke="#19182B" />
						<g filter="url(#filter0_d_26_56)">
							<path
								d="M-192 237C-192 222.641 -180.359 211 -166 211H215C229.359 211 241 222.641 241 237V474C241 488.359 229.359 500 215 500H-166C-180.359 500 -192 488.359 -192 474V237Z"
								fill="#242742"
							/>
						</g>
						<g filter="url(#filter1_d_26_56)">
							<path
								d="M-176 237C-176 230.925 -171.075 226 -165 226H214C220.075 226 225 230.925 225 237V474C225 480.075 220.075 485 214 485H-165C-171.075 485 -176 480.075 -176 474V237Z"
								fill="url(#paint2_linear_26_56)"
							/>
						</g>
						<mask
							id="mask1_26_56"
							style={{ maskType: "alpha" }}
							maskUnits="userSpaceOnUse"
							x="-176"
							y="226"
							width="401"
							height="259"
						>
							<path
								d="M-176 237C-176 230.925 -171.075 226 -165 226H214C220.075 226 225 230.925 225 237V474C225 480.075 220.075 485 214 485H-165C-171.075 485 -176 480.075 -176 474V237Z"
								fill="url(#paint3_linear_26_56)"
							/>
						</mask>
						<g mask="url(#mask1_26_56)">
							<circle cx="214" cy="470" r="158" fill="url(#paint4_linear_26_56)" />
							<circle
								cx="-39.5542"
								cy="191.446"
								r="158"
								transform="rotate(-135 -39.5542 191.446)"
								fill="url(#paint5_linear_26_56)"
							/>
						</g>
						<g filter="url(#filter2_d_26_56)">
							<path
								d="M129 126C129 119.925 133.925 115 140 115H551C557.075 115 562 119.925 562 126V355C562 361.075 557.075 366 551 366H140C133.925 366 129 361.075 129 355V126Z"
								fill="url(#paint6_linear_26_56)"
							/>
						</g>
						<path
							d="M129 126C129 119.925 133.925 115 140 115H225V366H140C133.925 366 129 361.075 129 355V126Z"
							fill="url(#paint7_linear_26_56)"
						/>
						<path
							d="M143 165.5C143 163.567 144.567 162 146.5 162H207.5C209.433 162 211 163.567 211 165.5C211 167.433 209.433 169 207.5 169H146.5C144.567 169 143 167.433 143 165.5Z"
							fill="#BABBDB"
						/>
						<path
							d="M143 185.5C143 183.567 144.567 182 146.5 182H200.5C202.433 182 204 183.567 204 185.5C204 187.433 202.433 189 200.5 189H146.5C144.567 189 143 187.433 143 185.5Z"
							fill="#BABBDB"
						/>
						<path
							d="M143 205.5C143 203.567 144.567 202 146.5 202H207.5C209.433 202 211 203.567 211 205.5C211 207.433 209.433 209 207.5 209H146.5C144.567 209 143 207.433 143 205.5Z"
							fill="#BABBDB"
						/>
						<path
							d="M143 225.5C143 223.567 144.567 222 146.5 222H185.5C187.433 222 189 223.567 189 225.5C189 227.433 187.433 229 185.5 229H146.5C144.567 229 143 227.433 143 225.5Z"
							fill="#BABBDB"
						/>
						<path
							d="M129 126C129 119.925 133.925 115 140 115H551C557.075 115 562 119.925 562 126V146H129V126Z"
							fill="#242742"
						/>
						<circle cx="151.5" cy="130.5" r="6.5" fill="#FF6464" />
						<circle cx="173.5" cy="130.5" r="6.5" fill="#FF9255" />
						<circle cx="195.5" cy="130.5" r="6.5" fill="#6BD5A8" />
						<path
							d="M246 97C246 94.7908 247.791 93 250 93H340C342.209 93 344 94.7908 344 97V219C344 221.209 342.209 223 340 223H250C247.791 223 246 221.209 246 219V97Z"
							fill="white"
						/>
						<mask
							id="mask2_26_56"
							style={{ maskType: "alpha" }}
							maskUnits="userSpaceOnUse"
							x="246"
							y="93"
							width="98"
							height="130"
						>
							<path
								d="M246 97C246 94.7908 247.791 93 250 93H340C342.209 93 344 94.7908 344 97V219C344 221.209 342.209 223 340 223H250C247.791 223 246 221.209 246 219V97Z"
								fill="white"
							/>
						</mask>
						<g mask="url(#mask2_26_56)">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M354.121 121.878C355.293 123.049 355.293 124.949 354.122 126.121L328.847 151.411C324.499 155.762 317.446 155.762 313.098 151.411C311.094 149.406 307.842 149.406 305.838 151.411L288.406 168.853C285.021 172.241 279.53 172.241 276.144 168.853C275.102 167.811 273.412 167.811 272.37 168.853L240.122 201.121C238.951 202.293 237.051 202.293 235.879 201.122C234.707 199.951 234.707 198.051 235.878 196.879L268.126 164.612C271.511 161.224 277.002 161.224 280.388 164.612C281.43 165.655 283.12 165.655 284.162 164.612L301.594 147.17C305.942 142.819 312.994 142.819 317.342 147.17C319.347 149.176 322.598 149.176 324.603 147.17L349.878 121.879C351.049 120.707 352.949 120.707 354.121 121.878Z"
								fill="url(#paint8_linear_26_56)"
							/>
						</g>
						<path
							d="M295 243C295 240.791 296.791 239 299 239H419C421.209 239 423 240.791 423 243V387C423 389.209 421.209 391 419 391H299C296.791 391 295 389.209 295 387V243Z"
							fill="white"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M359.5 347C377.449 347 392 332.449 392 314.5C392 296.551 377.449 282 359.5 282C341.551 282 327 296.551 327 314.5C327 332.449 341.551 347 359.5 347ZM359.5 361C385.181 361 406 340.181 406 314.5C406 288.819 385.181 268 359.5 268C333.819 268 313 288.819 313 314.5C313 340.181 333.819 361 359.5 361Z"
							fill="url(#paint9_linear_26_56)"
						/>
						<path
							d="M342.609 309.719C342.609 311.99 343.198 313.786 344.375 315.109C345.552 316.422 347.156 317.078 349.188 317.078C351.073 317.078 352.547 316.406 353.609 315.062C354.682 313.719 355.219 312.042 355.219 310.031H354.047C354.047 311.177 353.729 312.089 353.094 312.766C352.458 313.443 351.667 313.781 350.719 313.781C349.708 313.781 348.958 313.443 348.469 312.766C347.979 312.078 347.734 311.073 347.734 309.75C347.734 308.24 347.979 307.156 348.469 306.5C348.969 305.833 349.708 305.5 350.688 305.5C351.74 305.5 352.557 305.932 353.141 306.797C353.724 307.661 354.016 309.208 354.016 311.438L354.156 312.062C354.156 315.365 353.432 317.708 351.984 319.094C350.536 320.479 348.49 321.167 345.844 321.156H345.141V325.125H345.953C350.203 325.083 353.448 323.932 355.688 321.672C357.938 319.401 359.062 316.344 359.062 312.5V311.688C359.062 308.229 358.286 305.729 356.734 304.188C355.182 302.635 353.177 301.859 350.719 301.859C348.25 301.859 346.281 302.573 344.812 304C343.344 305.427 342.609 307.333 342.609 309.719Z"
							fill="#242742"
						/>
						<path
							d="M369.922 325H374.75V302.25H370.234L360.125 316.812V320.25H377.266V316.359H372.328L371.516 316.438H365.016L369.844 308.875H370V318.469L369.922 319.016V325Z"
							fill="#242742"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_26_56"
							x="-224"
							y="203"
							width="497"
							height="353"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="24" />
							<feGaussianBlur stdDeviation="16" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_56" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_26_56"
								result="shape"
							/>
						</filter>
						<filter
							id="filter1_d_26_56"
							x="-208"
							y="218"
							width="465"
							height="323"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="24" />
							<feGaussianBlur stdDeviation="16" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_56" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_26_56"
								result="shape"
							/>
						</filter>
						<filter
							id="filter2_d_26_56"
							x="97"
							y="107"
							width="497"
							height="315"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="24" />
							<feGaussianBlur stdDeviation="16" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_56" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_26_56"
								result="shape"
							/>
						</filter>
						<linearGradient
							id="paint0_linear_26_56"
							x1="400"
							y1="-3.21644e-05"
							x2="-8.15816e-06"
							y2="593"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF6A3A" />
							<stop offset="1" stopColor="#FF527B" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_26_56"
							x1="400"
							y1="-3.21644e-05"
							x2="-8.15816e-06"
							y2="593"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF6A3A" />
							<stop offset="1" stopColor="#FF527B" />
						</linearGradient>
						<linearGradient
							id="paint2_linear_26_56"
							x1="-86.5"
							y1="222"
							x2="221.5"
							y2="485"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF3E83" />
							<stop offset="1" stopColor="#FF9F2E" />
						</linearGradient>
						<linearGradient
							id="paint3_linear_26_56"
							x1="-86.5"
							y1="222"
							x2="221.5"
							y2="485"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF3E83" />
							<stop offset="1" stopColor="#FF9F2E" />
						</linearGradient>
						<linearGradient
							id="paint4_linear_26_56"
							x1="214"
							y1="312"
							x2="214"
							y2="628"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFB443" />
							<stop offset="1" stopColor="#FF5B64" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint5_linear_26_56"
							x1="-39.5542"
							y1="33.4457"
							x2="-39.5542"
							y2="349.446"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFB443" />
							<stop offset="1" stopColor="#FF5B64" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint6_linear_26_56"
							x1="345.5"
							y1="115"
							x2="345.5"
							y2="366"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#F8F8F8" />
							<stop offset="1" stopColor="#EEEEEE" />
						</linearGradient>
						<linearGradient
							id="paint7_linear_26_56"
							x1="177"
							y1="115"
							x2="177"
							y2="366"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#CACBE8" />
							<stop offset="1" stopColor="#EEEEEE" />
							<stop offset="1" stopColor="#CACBE8" />
						</linearGradient>
						<linearGradient
							id="paint8_linear_26_56"
							x1="352.349"
							y1="120.512"
							x2="244.229"
							y2="200.332"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF9049" />
							<stop offset="1" stopColor="#FF5E5E" />
						</linearGradient>
						<linearGradient
							id="paint9_linear_26_56"
							x1="359.5"
							y1="268"
							x2="359.5"
							y2="361"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF6A3D" />
							<stop offset="1" stopColor="#FF5B66" />
						</linearGradient>
					</defs>
				</svg>
			) : (
				<svg
					style={{ border: "none", width: "100%", overflow: "hidden" }}
					preserveAspectRatio="xMaxYMid slice"
					shapeRendering="geometricPrecision"
					width="375"
					height="284"
					viewBox="0 0 375 284"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_26_736"
						style={{ maskType: "alpha" }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="375"
						height="284"
					>
						<path
							d="M0 0H375V268C375 276.837 367.837 284 359 284H16C7.16345 284 0 276.837 0 268V0Z"
							fill="url(#paint0_linear_26_736)"
						/>
						<path
							d="M0 0H375V268C375 276.837 367.837 284 359 284H16C7.16345 284 0 276.837 0 268V0Z"
							stroke="#19182B"
						/>
					</mask>
					<g mask="url(#mask0_26_736)">
						<path
							d="M0 0H375V268C375 276.837 367.837 284 359 284H16C7.16345 284 0 276.837 0 268V0Z"
							fill="url(#paint1_linear_26_736)"
						/>
						<path
							d="M0 0H375V268C375 276.837 367.837 284 359 284H16C7.16345 284 0 276.837 0 268V0Z"
							stroke="#19182B"
						/>
						<g filter="url(#filter0_d_26_736)">
							<path
								d="M-16 101.838C-16 94.0759 -9.70778 87.7837 -1.94594 87.7837H204C211.762 87.7837 218.054 94.0759 218.054 101.838V229.946C218.054 237.708 211.762 244 204 244H-1.94594C-9.70778 244 -16 237.708 -16 229.946V101.838Z"
								fill="#242742"
							/>
						</g>
						<g filter="url(#filter1_d_26_736)">
							<path
								d="M-7.35132 101.838C-7.35132 98.5539 -4.68923 95.8918 -1.40537 95.8918H203.46C206.743 95.8918 209.405 98.5539 209.405 101.838V229.946C209.405 233.23 206.743 235.892 203.46 235.892H-1.40537C-4.68923 235.892 -7.35132 233.23 -7.35132 229.946V101.838Z"
								fill="url(#paint2_linear_26_736)"
							/>
						</g>
						<mask
							id="mask1_26_736"
							style={{ maskType: "alpha" }}
							maskUnits="userSpaceOnUse"
							x="-8"
							y="95"
							width="218"
							height="141"
						>
							<path
								d="M-7.35132 101.838C-7.35132 98.5539 -4.68923 95.8918 -1.40537 95.8918H203.46C206.743 95.8918 209.405 98.5539 209.405 101.838V229.946C209.405 233.23 206.743 235.892 203.46 235.892H-1.40537C-4.68923 235.892 -7.35132 233.23 -7.35132 229.946V101.838Z"
								fill="url(#paint3_linear_26_736)"
							/>
						</mask>
						<g mask="url(#mask1_26_736)">
							<circle cx="203.459" cy="227.784" r="85.4054" fill="url(#paint4_linear_26_736)" />
							<circle
								cx="66.4031"
								cy="77.2139"
								r="85.4054"
								transform="rotate(-135 66.4031 77.2139)"
								fill="url(#paint5_linear_26_736)"
							/>
						</g>
						<g filter="url(#filter2_d_26_736)">
							<path
								d="M157.513 41.8378C157.513 38.5539 160.176 35.8918 163.459 35.8918H385.622C388.905 35.8918 391.568 38.5539 391.568 41.8378V165.622C391.568 168.905 388.905 171.568 385.622 171.568H163.459C160.176 171.568 157.513 168.905 157.513 165.622V41.8378Z"
								fill="url(#paint6_linear_26_736)"
							/>
						</g>
						<path
							d="M157.513 41.8378C157.513 38.5539 160.176 35.8918 163.459 35.8918H209.405V171.568H163.459C160.176 171.568 157.513 168.905 157.513 165.622V41.8378Z"
							fill="url(#paint7_linear_26_736)"
						/>
						<path
							d="M165.081 63.1892C165.081 62.1443 165.928 61.2973 166.973 61.2973H199.946C200.991 61.2973 201.838 62.1443 201.838 63.1892C201.838 64.234 200.991 65.0811 199.946 65.0811H166.973C165.928 65.0811 165.081 64.234 165.081 63.1892Z"
							fill="#BABBDB"
						/>
						<path
							d="M165.081 74C165.081 72.9551 165.928 72.1081 166.973 72.1081H196.162C197.207 72.1081 198.054 72.9551 198.054 74C198.054 75.0448 197.207 75.8918 196.162 75.8918H166.973C165.928 75.8918 165.081 75.0448 165.081 74Z"
							fill="#BABBDB"
						/>
						<path
							d="M165.081 84.8108C165.081 83.7659 165.928 82.9189 166.973 82.9189H199.946C200.991 82.9189 201.838 83.7659 201.838 84.8108C201.838 85.8557 200.991 86.7027 199.946 86.7027H166.973C165.928 86.7027 165.081 85.8557 165.081 84.8108Z"
							fill="#BABBDB"
						/>
						<path
							d="M165.081 95.6216C165.081 94.5768 165.928 93.7297 166.973 93.7297H188.054C189.099 93.7297 189.946 94.5768 189.946 95.6216C189.946 96.6665 189.099 97.5135 188.054 97.5135H166.973C165.928 97.5135 165.081 96.6665 165.081 95.6216Z"
							fill="#BABBDB"
						/>
						<path
							d="M157.513 41.8378C157.513 38.554 160.176 35.8919 163.459 35.8919H385.622C388.905 35.8919 391.568 38.554 391.568 41.8378V52.6486H157.513V41.8378Z"
							fill="#242742"
						/>
						<circle cx="169.676" cy="44.2703" r="3.51351" fill="#FF6464" />
						<circle cx="181.568" cy="44.2703" r="3.51351" fill="#FF9255" />
						<circle cx="193.459" cy="44.2703" r="3.51351" fill="#6BD5A8" />
						<path
							d="M220.757 26.1622C220.757 24.968 221.725 24 222.919 24H271.568C272.762 24 273.73 24.968 273.73 26.1622V92.1081C273.73 93.3022 272.762 94.2703 271.568 94.2703H222.919C221.725 94.2703 220.757 93.3022 220.757 92.1081V26.1622Z"
							fill="white"
						/>
						<mask
							id="mask2_26_736"
							style={{ maskType: "alpha" }}
							maskUnits="userSpaceOnUse"
							x="220"
							y="24"
							width="54"
							height="71"
						>
							<path
								d="M220.757 26.1622C220.757 24.968 221.725 24 222.919 24H271.568C272.762 24 273.73 24.968 273.73 26.1622V92.1081C273.73 93.3022 272.762 94.2703 271.568 94.2703H222.919C221.725 94.2703 220.757 93.3022 220.757 92.1081V26.1622Z"
								fill="white"
							/>
						</mask>
						<g mask="url(#mask2_26_736)">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M279.201 39.6097C279.834 40.2428 279.835 41.2696 279.202 41.903L265.539 55.5737C263.189 57.9254 259.377 57.9254 257.027 55.5737C255.943 54.4894 254.185 54.4894 253.102 55.5737L243.68 65.0017C241.85 66.8329 238.881 66.8329 237.051 65.0017C236.488 64.4381 235.574 64.4381 235.011 65.0017L217.58 82.4436C216.947 83.0771 215.92 83.0774 215.287 82.4443C214.653 81.8112 214.653 80.7844 215.286 80.151L232.717 62.7091C234.547 60.878 237.515 60.878 239.345 62.7091C239.909 63.2727 240.822 63.2727 241.386 62.7091L250.808 53.2811C253.158 50.9293 256.97 50.9293 259.321 53.2811C260.404 54.3653 262.162 54.3653 263.245 53.2811L276.908 39.6104C277.541 38.9769 278.567 38.9766 279.201 39.6097Z"
								fill="url(#paint8_linear_26_736)"
							/>
						</g>
						<path
							d="M247.244 105.081C247.244 103.887 248.212 102.919 249.406 102.919H314.271C315.465 102.919 316.433 103.887 316.433 105.081V182.919C316.433 184.113 315.465 185.081 314.271 185.081H249.406C248.212 185.081 247.244 184.113 247.244 182.919V105.081Z"
							fill="white"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M282.109 161.297C291.811 161.297 299.676 153.432 299.676 143.73C299.676 134.027 291.811 126.162 282.109 126.162C272.406 126.162 264.541 134.027 264.541 143.73C264.541 153.432 272.406 161.297 282.109 161.297ZM282.109 168.865C295.991 168.865 307.244 157.612 307.244 143.73C307.244 129.848 295.991 118.595 282.109 118.595C268.227 118.595 256.974 129.848 256.974 143.73C256.974 157.612 268.227 168.865 282.109 168.865Z"
							fill="url(#paint9_linear_26_736)"
						/>
						<path
							d="M272.979 141.145C272.979 142.373 273.297 143.344 273.933 144.059C274.569 144.769 275.437 145.123 276.535 145.123C277.554 145.123 278.35 144.76 278.925 144.034C279.505 143.307 279.795 142.401 279.795 141.314H279.161C279.161 141.934 278.989 142.426 278.646 142.792C278.303 143.158 277.875 143.341 277.362 143.341C276.816 143.341 276.411 143.158 276.146 142.792C275.881 142.421 275.749 141.877 275.749 141.162C275.749 140.346 275.881 139.76 276.146 139.405C276.416 139.045 276.816 138.865 277.345 138.865C277.914 138.865 278.356 139.099 278.671 139.566C278.987 140.033 279.144 140.869 279.144 142.074L279.22 142.412C279.22 144.197 278.829 145.464 278.046 146.213C277.264 146.962 276.157 147.333 274.727 147.328H274.347V149.473H274.786C277.083 149.45 278.837 148.828 280.048 147.606C281.264 146.379 281.872 144.726 281.872 142.649V142.209C281.872 140.34 281.453 138.989 280.614 138.155C279.775 137.316 278.691 136.897 277.362 136.897C276.028 136.897 274.964 137.283 274.17 138.054C273.376 138.825 272.979 139.856 272.979 141.145Z"
							fill="#242742"
						/>
						<path
							d="M287.742 149.405H290.352V137.108H287.911L282.447 144.98V146.838H291.712V144.735H289.043L288.604 144.777H285.09L287.7 140.689H287.785V145.875L287.742 146.171V149.405Z"
							fill="#242742"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d_26_736"
							x="-48"
							y="79.7837"
							width="298.054"
							height="220.216"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="24" />
							<feGaussianBlur stdDeviation="16" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_736" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_26_736"
								result="shape"
							/>
						</filter>
						<filter
							id="filter1_d_26_736"
							x="-39.3513"
							y="87.8918"
							width="280.757"
							height="204"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="24" />
							<feGaussianBlur stdDeviation="16" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_736" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_26_736"
								result="shape"
							/>
						</filter>
						<filter
							id="filter2_d_26_736"
							x="125.513"
							y="27.8918"
							width="298.054"
							height="199.676"
							filterUnits="userSpaceOnUse"
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="24" />
							<feGaussianBlur stdDeviation="16" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_26_736" />
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_26_736"
								result="shape"
							/>
						</filter>
						<linearGradient
							id="paint0_linear_26_736"
							x1="375"
							y1="-1.54042e-05"
							x2="247.723"
							y2="369.362"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF6A3A" />
							<stop offset="1" stopColor="#FF527B" />
						</linearGradient>
						<linearGradient
							id="paint1_linear_26_736"
							x1="375"
							y1="-1.54042e-05"
							x2="247.723"
							y2="369.362"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF6A3A" />
							<stop offset="1" stopColor="#FF527B" />
						</linearGradient>
						<linearGradient
							id="paint2_linear_26_736"
							x1="41.0271"
							y1="93.7297"
							x2="207.514"
							y2="235.892"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF3E83" />
							<stop offset="1" stopColor="#FF9F2E" />
						</linearGradient>
						<linearGradient
							id="paint3_linear_26_736"
							x1="41.0271"
							y1="93.7297"
							x2="207.514"
							y2="235.892"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF3E83" />
							<stop offset="1" stopColor="#FF9F2E" />
						</linearGradient>
						<linearGradient
							id="paint4_linear_26_736"
							x1="203.459"
							y1="142.378"
							x2="203.459"
							y2="313.189"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFB443" />
							<stop offset="1" stopColor="#FF5B64" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint5_linear_26_736"
							x1="66.4031"
							y1="-8.19154"
							x2="66.4031"
							y2="162.619"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FFB443" />
							<stop offset="1" stopColor="#FF5B64" stopOpacity="0" />
						</linearGradient>
						<linearGradient
							id="paint6_linear_26_736"
							x1="274.54"
							y1="35.8919"
							x2="274.54"
							y2="171.568"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#F8F8F8" />
							<stop offset="1" stopColor="#EEEEEE" />
						</linearGradient>
						<linearGradient
							id="paint7_linear_26_736"
							x1="183.459"
							y1="35.8919"
							x2="183.459"
							y2="171.568"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#CACBE8" />
							<stop offset="1" stopColor="#EEEEEE" />
							<stop offset="1" stopColor="#CACBE8" />
						</linearGradient>
						<linearGradient
							id="paint8_linear_26_736"
							x1="278.243"
							y1="38.8711"
							x2="219.8"
							y2="82.0173"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF9049" />
							<stop offset="1" stopColor="#FF5E5E" />
						</linearGradient>
						<linearGradient
							id="paint9_linear_26_736"
							x1="282.109"
							y1="118.595"
							x2="282.109"
							y2="168.865"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#FF6A3D" />
							<stop offset="1" stopColor="#FF5B66" />
						</linearGradient>
					</defs>
				</svg>
			)}
		</Fragment>
	);
};

const NewsletterSignUpFormSubscriptionBenefitsListCheckmarkIcon: FC = () => {
	return (
		<svg
			style={{ flex: "0 0 auto" }}
			width="21"
			height="21"
			viewBox="0 0 21 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
			<path d="M6 11.3812L8.73464 14L15 8" stroke="white" strokeWidth="2" />
		</svg>
	);
};

export const NewsletterSignUpForm: FC = () => {
	const initialSignUpFormValues: SignUpFormValues = { emailAddress: "" };

	const handleSignUpFormSubmit = (
		values: SignUpFormValues,
		actions: FormikHelpers<{ emailAddress: string }>
	) => {
		console.log({ values, actions });
		alert(JSON.stringify(values, null, 2));
		// await createNewsletter({ emailAddress });
		actions.setSubmitting(false);
	};

	return (
		<StyledNewsletterSignUpForm>
			<NewsletterSignUpFormImage>
				<NewsletterSignUpFormSvgImage />
			</NewsletterSignUpFormImage>
			<NewsletterSignUpFormContent>
				<NewsletterSignUpFormTitle>Stay updated!</NewsletterSignUpFormTitle>
				<NewsletterSignUpFormText>
					Join 60,000+ product managers receiving monthly updates on:
				</NewsletterSignUpFormText>
				<NewsletterSignUpFormSubscriptionBenefitsList>
					<NewsletterSignUpFormSubscriptionBenefitsListItem>
						<NewsletterSignUpFormSubscriptionBenefitsListCheckmarkIcon />
						Product discovery and building what matters
					</NewsletterSignUpFormSubscriptionBenefitsListItem>
					<NewsletterSignUpFormSubscriptionBenefitsListItem>
						<NewsletterSignUpFormSubscriptionBenefitsListCheckmarkIcon />
						Measuring to ensure updates are a success
					</NewsletterSignUpFormSubscriptionBenefitsListItem>
					<NewsletterSignUpFormSubscriptionBenefitsListItem>
						<NewsletterSignUpFormSubscriptionBenefitsListCheckmarkIcon />
						And much more!
					</NewsletterSignUpFormSubscriptionBenefitsListItem>
				</NewsletterSignUpFormSubscriptionBenefitsList>
				<Formik
					initialValues={initialSignUpFormValues}
					onSubmit={handleSignUpFormSubmit}
					validationSchema={SignUpFormSchema}
				>
					{({ errors, touched }) => (
						<Form>
							<SignUpFormFieldset>
								<SignUpFormLegend>Subscribe to the Newsletter</SignUpFormLegend>
								<SignUpFormField>
									<SignUpFormLabel htmlFor="emailAddress">Email address</SignUpFormLabel>
									<Field
										id="emailAddress"
										name="emailAddress"
										type="email"
										placeholder="email@company.com"
										className={styles["sign-up-form-email-input"]}
									/>
									{errors.emailAddress && touched.emailAddress ? (
										<div>{errors.emailAddress}</div>
									) : null}
								</SignUpFormField>
								<Button type="submit">Subscribe to monthly newsletter</Button>
							</SignUpFormFieldset>
						</Form>
					)}
				</Formik>
			</NewsletterSignUpFormContent>
		</StyledNewsletterSignUpForm>
	);
};
