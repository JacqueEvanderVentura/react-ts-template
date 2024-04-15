import React from "react";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/appSettingsSlice";

import { enqueueSnackbar } from "notistack";

import CustomDropdown from "../Dropdown";

const LanguageSwitcher: React.FC = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const onSubmit = (data: "en" | "es") => {
		dispatch(changeLanguage(data));
		i18n.changeLanguage(data);
		enqueueSnackbar(t("language-change"), {
			variant: "info",
			autoHideDuration: 5000,
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right",
			},
		});
	};

	const languageOptions = [
		{ value: "en", alt: "English", imgSrc: "http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" },
		{ value: "es", alt: "Español", imgSrc: "http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" },
	];

	return <CustomDropdown options={languageOptions} onChange={(value: string) => onSubmit(value as "en" | "es")} />;
};

export default LanguageSwitcher;
