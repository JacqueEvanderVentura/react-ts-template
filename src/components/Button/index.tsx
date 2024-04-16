import React, { ReactNode } from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary" | "danger" | "ref" | "outlined";
	textSize?: "small" | "medium" | "large" | number;
	children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = "ref", textSize = "medium", children, ...rest }) => {
	const sizeMapping = {
		small: "text-sm",
		medium: "text-base",
		large: "text-lg",
	};

	const buttonClasses = classNames(
		" py-4 min-w-fit border-white border-[5px] rounded-[14px] transition-all duration-300 active:scale-110 sm:active:scale-95",
		{
			"bg-blue-500 hover:bg-blue-600 active:bg-blue-900": variant === "primary",
			"bg-gray-500 hover:bg-gray-600 active:bg-gray-900": variant === "secondary",
			"bg-red-500 hover:bg-red-600 active:bg-red-900": variant === "danger",
			"bg-white text-red-500 active:text-white active:bg-red-500 active:border-red-500": variant === "ref",
			"bg-none hover:bg-red-600 active:bg-red-900": variant === "outlined",
		},
		typeof textSize === "number" ? "text-custom" : sizeMapping[textSize] || "text-base",
		rest.className,
	);
	const textStyle =
		typeof textSize === "number" ? ({ "--custom-text-size": `${textSize}px` } as React.CSSProperties) : {};

	return (
		<button {...rest} className={buttonClasses} style={textStyle}>
			{children}
		</button>
	);
};

export default Button;
