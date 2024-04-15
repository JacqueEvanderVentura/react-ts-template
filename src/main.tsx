import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18n";

import { store } from "./redux/store.js";
import { Root } from "./routes/root.tsx";
import { Buttons } from "./routes/dummy/Buttons.tsx";
import { FormAndInputs } from "./routes/dummy/FormAndInputs.tsx";
import { ErrorPage } from "./components/Error404/index.tsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(far, fas, fab);

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "buttons",
				element: <Buttons />,
			},
			{
				path: "form-and-inputs",
				element: <FormAndInputs />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
