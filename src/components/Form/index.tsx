import React, { useState, ReactNode } from "react";
import { Button, Input, Select, Datalist } from "../../components";

interface FormProps {
	initialValue: Record<string, any>;
	onSubmit: (data: any) => void;
	children: ReactNode;
	submitButtonText?: string;
}

const Form: React.FC<FormProps> = ({ initialValue, onSubmit, children, submitButtonText = "Submit" }) => {
	const [formState, setFormState] = useState(initialValue);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(formState);
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					if (child.type === Input) {
						return React.cloneElement(child, {
							onChange: handleChange,
						} as React.InputHTMLAttributes<HTMLInputElement>);
					} else if (child.type === Select || child.type === Datalist) {
						return React.cloneElement(child, {
							onChange: handleChange,
						} as React.SelectHTMLAttributes<HTMLSelectElement>);
					} else if (child.type === "textarea") {
						return React.cloneElement(child, {
							onChange: handleChange,
						} as React.TextareaHTMLAttributes<HTMLTextAreaElement>);
					}
				}
				return child;
			})}
			<Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
				{submitButtonText}
			</Button>
		</form>
	);
};

export default Form;
