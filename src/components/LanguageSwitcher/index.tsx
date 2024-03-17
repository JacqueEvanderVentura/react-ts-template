import React from "react";
import i18n from "../../i18n";
import CustomDropdown from "../Dropdown";

const LanguageSwitcher: React.FC = () => {
	const onSubmit = (data: "en" | "es") => {
		i18n.changeLanguage(data);
	};

	const languageOptions = [
		{ value: "en", alt: "English", imgSrc: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" },
		{ value: "es", alt: "Español", imgSrc: "http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" },
	];

	return <CustomDropdown options={languageOptions} onChange={(value: string) => onSubmit(value as "en" | "es")} />;
};

export default LanguageSwitcher;
