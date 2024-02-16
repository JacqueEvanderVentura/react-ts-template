import React from "react";
import classNames from "classnames";

interface HeadingProps {
	level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children: React.ReactNode;
	className?: string;
}

const Heading: React.FC<HeadingProps> = ({
	level = "h1",
	children,
	className,
}) => {
	const TagName = level;

	const headingStyles = {
		h1: "text-4xl font-extrabold",
		h2: "text-3xl font-bold",
		h3: "text-2xl font-semibold",
		h4: "text-xl font-medium",
		h5: "text-lg font-medium",
		h6: "text-base font-medium",
	};

	const headingClasses = classNames(headingStyles[level], className);

	return <TagName className={headingClasses}>{children}</TagName>;
};

export default Heading;
