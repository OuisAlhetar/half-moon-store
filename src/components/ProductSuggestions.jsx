// components/SuggestedProducts.jsx
import React from "react";
import { useProducts } from "../context/testContext";

const SuggestedProducts = ({ addToCart }) => {
	const test = useProducts();
	const suggestedProducts = test.products;


	return (
		<div className="row suggestions">
			<h3 className="heading">اقترحنا لك</h3>
			<div className="row">
				{suggestedProducts.map((product) => (
					<div key={product.id} className="col-lg-3 col-md-4">
						<div className="card custom-thumbnail">
							<div className="overlay">
								<button
									className="btn add-to-cart-btn"
									onClick={() => addToCart(product)}
								>
									إضافة إلى العربة
									<i className="fas fa-cart-plus"></i>
								</button>
							</div>
							<img src={product.images[0]} alt={product.title} />
							<div className="card-body p-2">
								<div className="clearfix">
									<h4 className="float-start">{product.title}</h4>
									<div className="price float-end">${product.price}</div>
								</div>
								<div className="rating">
									{[1, 2, 3, 4, 5].map((star) => (
										<i
											key={star}
											className={`fa-${
												star <= product.rating ? "solid" : "regular"
											} fa-star ${star <= product.rating ? "active" : ""}`}
										></i>
									))}
								</div>
								<button
									className="btn btn-warning add-to-cart-btn d-block d-lg-none mx-auto"
									onClick={() => addToCart(product)}
								>
									إضافة إلى العربة
									<i className="fas fa-cart-plus"></i>
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SuggestedProducts;

//! ------------------------ old code ------------------------------
// import React from "react";

// const ProductSuggestions = () => (
// 	<div className="row suggestions">
// 		<h3 className="heading">اقترحنا لك</h3>
// 		<div className="row">{/* Add suggested products here */}</div>
// 	</div>
// );

// export default ProductSuggestions;
