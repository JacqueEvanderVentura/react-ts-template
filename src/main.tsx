import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { SnackbarProvider } from "notistack";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(far, fas, fab);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SnackbarProvider
			maxSnack={3}
			anchorOrigin={{
				vertical: "top",
				horizontal: "right",
			}}>
			<App />
		</SnackbarProvider>
	</React.StrictMode>,
);
