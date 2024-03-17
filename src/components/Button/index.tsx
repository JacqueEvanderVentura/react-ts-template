import React, { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "danger";
	textSize?: "small" | "medium" | "large" | number;
	children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", textSize = "medium", children, ...rest }) => {
	const sizeMapping = {
		small: "text-sm",
		medium: "text-base",
		large: "text-lg",
	};

	const textClass = typeof textSize === "number" ? `text-[${textSize}px]` : sizeMapping[textSize] || "text-base";

	const buttonClasses = classNames(
		"px-4 py-2 rounded text-white transition-all duration-150 active:scale-110 sm:active:scale-95",
		{
			"bg-blue-500 hover:bg-blue-600 active:bg-blue-900": variant === "primary",
			"bg-gray-500 hover:bg-gray-600 active:bg-gray-900": variant === "secondary",
			"bg-red-500  hover:bg-red-600 active:bg-red-900": variant === "danger",
		},
		textClass,
		rest.className,
	);

	return (
		<button {...rest} className={buttonClasses}>
			{children}
		</button>
	);
};

export default Button;
