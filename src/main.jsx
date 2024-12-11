

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import "./styles/css/style.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/js/all.min";

import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/testContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductsProvider>
				<CartProvider>
					<App />
				</CartProvider>
			</ProductsProvider>
		</BrowserRouter>
	</React.StrictMode>
);
