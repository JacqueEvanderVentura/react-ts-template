import React from "react";
import classNames from "classnames";

// interface InputProps {
// id?: string;
// name?: string;
// type?: string;
// value?: string;
// placeholder?: string;
// onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
// onClick?: () => void;
// className?: string;
// }

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
	const inputClasses = classNames(
		"border border-gray-300 rounded-md p-2",
		className,
	);

	return <input {...rest} className={inputClasses} />;
};

export default Input;
