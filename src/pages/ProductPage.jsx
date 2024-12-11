

import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/testContext";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import ProductImages from "../components/ProductImages";
import ProductDetails from "../components/ProductDetails";
import ProductDescription from "../components/ProductDescription";
import ProductComments from "../components/ProductComments";
import ProductSuggestions from "../components/ProductSuggestions";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";

const ProductPage = () => {
	const { productId } = useParams();
	const { products } = useProducts();
	const product = products.find((p) => p.id === parseInt(productId));

	const { addToCart } = useCart();

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<div className="container-fluid">
			<Navbar />
			<Breadcrumb category={product.category} title={product.title} />

			<div className="container">
				<div className="row mb-5">
					<div className="col-12 col-md-6 mb-4 mb-md-0">
						<ProductImages images={product.images} />
					</div>
					<div className="col-12 col-md-6">
						<ProductDetails product={product} />
					</div>
				</div>

				<div className="row mb-4">
					<div className="col-12">
						<ProductDescription description={product.description} />
					</div>
				</div>

				<div className="row mb-4">
					<div className="col-12">
						<ProductComments />
					</div>
				</div>

				<div className="row mb-4">
					<div className="col-12">
						<ProductSuggestions addToCart={addToCart} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductPage;








// !---------------- old code ---------------------
// import React from "react";
// import { useParams } from "react-router-dom";
// import { useProducts } from "../context/testContext";
// import Navbar from "../components/Navbar";
// import Breadcrumb from "../components/Breadcrumb";
// import ProductImages from "../components/ProductImages";
// import ProductDetails from "../components/ProductDetails";
// import ProductDescription from "../components/ProductDescription";
// import ProductComments from "../components/ProductComments";
// import ProductSuggestions from "../components/ProductSuggestions";
// import { useCart } from "../context/CartContext";
// import Footer from "../components/Footer";

// const ProductPage = () => {
// 	const { productId } = useParams();
// 	const { products } = useProducts();
// 	const product = products.find((p) => p.id === parseInt(productId));

// 	const { addToCart } = useCart();

// 	if (!product) {
// 		return <div>Product not found</div>;
// 	}

// 	return (
// 		<div className="container-fluid">
// 			<Navbar />
// 			<Breadcrumb category={product.category} title={product.title} />

// 			<div className="container borders-between">
// 				<div className="row mb-5">
// 					<ProductImages images={product.images} />
// 					<ProductDetails product={product} />
// 				</div>

// 				<ProductDescription description={product.description} />
// 				<ProductComments />
// 				<ProductSuggestions addToCart={addToCart} />
// 			</div>
// 			<Footer/>
// 		</div>
// 	);
// };

// export default ProductPage;
