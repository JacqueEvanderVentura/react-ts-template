import React, { ReactNode } from "react";
import classNames from "classnames";

interface DataListProps extends React.InputHTMLAttributes<HTMLInputElement> {
	selectedValue?: string | number;
	className?: string;
	children: ReactNode;
}

const DataList: React.FC<DataListProps> = ({
	selectedValue,
	onChange,
	className,
	children,
	...rest
}) => {
	const dataListClasses = classNames(
		"border border-gray-300 rounded-md p-2",
		className,
	);

	return (
		<div className={dataListClasses}>
			<input
				list="datalistOptions"
				value={selectedValue}
				onChange={onChange}
				className="w-full"
				{...rest}
			/>
			<datalist id="datalistOptions">{children}</datalist>
		</div>
	);
};

export default DataList;
