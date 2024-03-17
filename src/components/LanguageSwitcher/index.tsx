import React from "react";
import { useForm } from "react-hook-form";
import i18n from "../../i18n";
import Select from "../Select";

const LanguageSwitcher: React.FC = () => {
	const {
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			data: "en",
		},
	});

	const onSubmit = (data: "en" | "es") => {
		i18n.changeLanguage(data);
	};

	const handleChange = (e: any) => {
		onSubmit(e.target.value);
	};
	return (
		<Select name="language" register={register} errors={errors} onChange={handleChange}>
			<option value="en">English</option>
			<option value="es">Español</option>
		</Select>
	);
};

export default LanguageSwitcher;
