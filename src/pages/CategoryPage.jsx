// CategoryPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useProducts } from "../context/testContext";
import ProductSlider from "../components/ProductSlider";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const CategoryPage = () => {
	const { categoryName } = useParams();

	const test = useProducts();
	// console.log(test.products);
	const products = test.products;


	return (
		<div className="container-fluid">
			{/* Navbar */}
			<Navbar />
			{/* End Navbar */}
			<div className="container mt-4 mb-5">
				<h2 className="mb-4">
					{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
				</h2>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 w-100">
					{products.map((product) => (
						<div className="col" key={product.id}>
							<Link to={`/product/${product.id}`}>
								<ProductCard
									image={product.images[0]}
									title={product.title}
									price={product.price}
									rating={product.rating}
									sale={product.sale}
									product= {product}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
			{/* footer */}
			<Footer/>
			{/* end footer */}
		</div>
	);
};

export default CategoryPage;
