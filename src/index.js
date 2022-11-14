import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/style/index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AppProvider component={<App />} />
	</BrowserRouter>
);
