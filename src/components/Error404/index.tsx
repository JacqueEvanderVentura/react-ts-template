import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { Button, Heading, Typography } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useTranslation } from "react-i18next";

interface IErrorMessage {
	status?: string | number;
	text?: string;
}
const ErrorMessage = ({ status, text }: IErrorMessage) => {
	const { t } = useTranslation();
	return (
		<div id="error-page" className="flex flex-col justify-center items-center h-screen">
			<Heading level="h1" className="text-6xl">
				{status !== undefined ? `Error ${status}` : "Oops"}
			</Heading>
			<Typography>{text ?? "Sorry, an unexpected error has occurred"}</Typography>
			<Link to="/">
				<Button className="mt-20">
					<FontAwesomeIcon icon={faCircleLeft} /> {t("go-back-to-beginning")}
				</Button>
			</Link>
		</div>
	);
};

export const ErrorPage = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return <ErrorMessage status={error.status} text={error.statusText} />;
	} else if (error instanceof Error) {
		return <ErrorMessage text={error.message} />;
	} else {
		return <ErrorMessage text="Unknown error" />;
	}
};
