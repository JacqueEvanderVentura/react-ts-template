import React, { ReactNode } from "react";
import classNames from "classnames";
import { FieldValues, UseFormRegister, DeepMap, FieldError } from "react-hook-form";
import { Typography } from "../";
interface DataListProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	children: ReactNode;
	register: UseFormRegister<any>;
	name: string;
	label?: string;
	required?: boolean;
	errors?: DeepMap<FieldValues, FieldError>;
}

const DataList: React.FC<DataListProps> = ({
	className,
	children,
	register,
	name,
	label,
	required = false,
	errors,
	...rest
}) => {
	const dataListClasses = classNames("border border-gray-300 rounded-md p-2 m-2 w-full h-full", className);

	const validationRule = (value: string) => value.trim() !== "" || "This field is required";

	const registerRequirementHandler = required
		? register(name, {
				validate: validationRule || undefined,
			})
		: register(name, { required: false });

	return (
		<div>
			{label && (
				<label className="mt-2 text-sm text-gray-700" htmlFor={name}>
					{label}
					{required && <span className="text-red-500">*</span>}
				</label>
			)}
			<div className={dataListClasses}>
				<input
					list="datalistOptions"
					{...registerRequirementHandler}
					className="w-full outline-none bg-transparent"
					{...rest}
				/>
				<datalist id="datalistOptions">{children}</datalist>
			</div>
			{errors && errors[name] && (
				<Typography size="xs" variant="warning">
					{errors[name].message}
				</Typography>
			)}
		</div>
	);
};

export default DataList;
