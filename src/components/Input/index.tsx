import { InputHTMLAttributes, FC } from "react";
import classNames from "classnames";
import { FieldValues, UseFormRegisterReturn, DeepMap, FieldError } from "react-hook-form";

import { Typography } from "../";
import { t } from "i18next";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	name: string;
	label?: string;
	register: UseFormRegisterReturn<any>;
	required?: boolean;
	errors?: DeepMap<FieldValues, FieldError>;
	type?: string;
	id?: string;
}

const Input: FC<InputProps> = ({ id, className, name, type, label, register, required, errors, ...rest }) => {
	const inputClasses = classNames(
		"input",
		{ "input-radio": type === "radio", "input-checkbox": type === "checkbox" },
		className,
	);
	return (
		<div className="flex flex-col">
			{label && (
				<label className="mt-2 text-sm text-gray-700" htmlFor={id ?? name}>
					{label}
					{errors && <span className="text-red-500">*</span>}
				</label>
			)}
			<input id={id ?? name} {...register} {...rest} type={type} className={inputClasses} />
			{errors && errors[name] && (
				<Typography size="xs" variant="warning">
					* {t("field-required")}
				</Typography>
			)}
		</div>
	);
};

export default Input;
