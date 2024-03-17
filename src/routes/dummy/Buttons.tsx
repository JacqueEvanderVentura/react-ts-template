import { t } from "i18next";
import { Button } from "../../components";

export const Buttons = () => {
	return (
		<div className="grid grid-cols-3 w-96 sm:w-[630px] md:w-[768px] gap-2">
			<Button textSize="large">{t("button-large")}</Button>
			<Button textSize="medium">{t("button-medium")}</Button>
			<Button textSize="small">{t("button-small")}</Button>
			<Button textSize="medium" variant="primary">
				{t("variant-primary")}
			</Button>
			<Button textSize="medium" variant="secondary">
				{t("variant-secondary")}
			</Button>
			<Button textSize="medium" className="bg-green-300 hover:bg-green-500 active:bg-green-800 text-black">
				{t("button-custom")}
			</Button>
		</div>
	);
};
