import "./styles/css/style.css"
import Home from "./pages/Home";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Singup from "./pages/Signup";
import ProfileManagement from "./pages/ProfileManagement";
function App() {
	// useEffect(() => {
	// 	document.documentElement.dir = "rtl"; // Set direction to rtl
	// 	document.documentElement.lang = "ar"; // Set language (optional)
	// }, []);

	return (
		<Routes>
			{/* Public Routes */}
			{/* <Route element={<AuthLayout />}> */}
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Singup />} />
			{/* </Route> */}
			{/* Private Routes */}
			{/* <Route element={<RootLayout />}> */}
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<Contact />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/search" element={<Search />} />
			<Route path="/product/:productId" element={<ProductPage />} />
			<Route path="/payment" element={<Payment />} />
			<Route path="/category/:categoryName" element={<CategoryPage />} />

			<Route path="/userprofile/:userId" element={ <ProfileManagement/>} />

			{/* </Route> */}
		</Routes>
	);
}

export default App;
