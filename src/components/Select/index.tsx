import React from "react";
import classNames from "classnames";
import { FieldValues, UseFormRegister, DeepMap, FieldError } from "react-hook-form";
import { Typography } from "../";
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	children: React.ReactNode;
	register: UseFormRegister<any>;
	name: string;
	label?: string;
	defaultValue?: string | number;
	required?: boolean;
	errors?: DeepMap<FieldValues, FieldError>;
}

const Select: React.FC<SelectProps> = ({
	className,
	children,
	register,
	name,
	label,
	defaultValue,
	required = false,
	errors,
	...rest
}) => {
	const selectClasses = classNames("border border-gray-300 rounded-md p-2 m-2 w-full h-full", className);

	const validationRule = (value: string) => value !== "Please select an option" || "This field is required";

	const registerRequirementHandler = required
		? register(name, {
				validate: validationRule || undefined,
			})
		: register(name, { required: false });

	return (
		<div className="flex flex-col">
			{label && (
				<label className="mt-2 text-sm text-gray-700" htmlFor={name}>
					{label}
					{required && <span className="text-red-500">*</span>}
				</label>
			)}
			<select defaultValue={defaultValue} className={selectClasses} {...registerRequirementHandler} {...rest}>
				{defaultValue && (
					<option value={defaultValue} disabled>
						{defaultValue}
					</option>
				)}
				{children}
			</select>
			{errors && errors[name] && (
				<Typography size="xs" variant="warning">
					* {errors[name].message}
				</Typography>
			)}
		</div>
	);
};

export default Select;
