import { Heading, Button } from "../components";

import { faFaceGrinWink } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import LanguageSwitcher from "../components/LanguageSwitcher";

export const Showcase = () => {
	const { t } = useTranslation();
	return (
		<div className="flex flex-col justify-center items-center w-[98vw] m-1">
			<div className="absolute top-0 right-10">
				<LanguageSwitcher />
			</div>
			<Heading level="h2" className="my-4">
				{t("welcome")} <FontAwesomeIcon className="text-amber-400" icon={faFaceGrinWink} />{" "}
			</Heading>
			<div className="flex flex-col justify-center items-center w-5/12 gap-2">
				<div className="flex justify-center align-center gap-2 mb-3">
					<Link to="form-and-inputs">
						<Button variant="secondary">Form/Inputs</Button>
					</Link>

					<Link to="buttons">
						<Button>{t("buttons")}</Button>
					</Link>

					<Link to="well, this is showing you the 404 :)">
						<Button variant="danger">404</Button>
					</Link>
				</div>

				<Outlet />
			</div>
		</div>
	);
};
