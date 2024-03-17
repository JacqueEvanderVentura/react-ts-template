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
}

const Input: FC<InputProps> = ({ className, name, label, register, required, errors, ...rest }) => {
	const inputClasses = classNames("border border-gray-300 rounded-md p-2 m-2 w-full", className);
	return (
		<div className="flex flex-col">
			{label && (
				<label className="mt-2 text-sm text-gray-700" htmlFor={name}>
					{label}
					{errors && <span className="text-red-500">*</span>}
				</label>
			)}
			<input {...register} {...rest} className={inputClasses} />
			{errors && errors[name] && (
				<Typography size="xs" variant="warning">
					* {t("field-required")}
				</Typography>
			)}
		</div>
	);
};

export default Input;
