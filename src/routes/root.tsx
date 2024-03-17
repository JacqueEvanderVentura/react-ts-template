import { SnackbarProvider } from "notistack";
import App from "../App";

export const Root = () => {
	return (
		<SnackbarProvider
			maxSnack={3}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}>
			<App />
		</SnackbarProvider>
	);
};
