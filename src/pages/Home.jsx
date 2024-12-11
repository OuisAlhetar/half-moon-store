import "bootstrap/dist/js/bootstrap.bundle.js";
import "../styles/sass/custom.scss";
import "../styles/css/style.css";
import "@fortawesome/fontawesome-free/js/all.min";
import "../styles/sass/style.scss";
import Navbar from "../components/Navbar";
import MostPopularProducts from "../components/MostPopularProducts";
import StoreFeatures from "../components/StoreFeatures";
import MostSaled from "../components/MostSaled";
import Footer from "../components/Footer";
import Categories from "../components/Categoies";

function Home() {
	return (
		<div className="container-fluid">
			{/* NavBar */}
			<Navbar />

			{/* <!-- المنتجات المميزة --> */}
			<MostPopularProducts />
			{/* <!-- نهاية المنتجات المميزة --> */}

			{/* <!-- قسم مميزات المتجر --> */}
			<StoreFeatures />
			{/* <!--  نهاية قسم مميزات المتجر --> */}

			{/* <!-- قسم المنتجات الأكثر مبيعًا --> */}
			<MostSaled />
			{/* <!-- نهاية قسم المنتجات الأكثر مبيعًا --> */}

			{/* <!-- قسم الماركات العالمية --> */}
			{/* <Brands/> */}
			<Categories />
			{/* <!-- نهاية قسم الماركات العالمية --> */}

			{/* <!-- Footer --> */}
			<Footer />
			{/* <!-- End Footer --> */}
		</div>
	);
}

export default Home;
