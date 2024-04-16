import React from "react";
import classNames from "classnames";

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
	size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
	variant?: "warning" | "caption" | "card";
	className?: string;
}

const Typography: React.FC<TypographyProps> = ({ size = "base", variant, children, className, ...rest }) => {
	const textSizeStyles = {
		xs: "text-xs",
		sm: "text-sm",
		base: "text-base",
		lg: "text-lg",
		xl: "text-xl",
		"2xl": "text-2xl",
		"3xl": "text-3xl",
		"4xl": "text-4xl",
		"5xl": "text-5xl",
		"6xl": "text-6xl",
	};

	const textSizeClass = textSizeStyles[size];

	const variantStyles = {
		caption: "text-gray-500 text-sm",
		warning: "text-red-500 text-xs italic",
		card: "text-white text-center px-2",
	};

	const variantClass = variant ? variantStyles[variant] : "";

	const typographyClasses = classNames(textSizeClass, variantClass, className);

	return (
		<p className={typographyClasses} {...rest}>
			{children}
		</p>
	);
};

export default Typography;
