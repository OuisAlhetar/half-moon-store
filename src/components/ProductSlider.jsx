import React from "react";
import ProductCard from "./ProductCard";

const ProductSlider = ({ products }) => {
	return (
		<div
			id="carousel-most-sold"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<ol className="carousel-indicators custom-carousel-indicators2">
				{products.map((_, index) => (
					<li
						key={index}
						data-bs-target="#carousel-most-sold"
						data-bs-slide-to={index}
						className={index === 0 ? "active" : ""}
					></li>
				))}
			</ol>
			<div className="carousel-inner">
				{products.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
					>
						<div className="row">
							{slide.map((product) => (
								<div key={product.id} className="col-lg-3 col-md-4">
									<ProductCard
										image={product.images[0]}
										title={product.title}
										price={`${product.price}$`}
										rating={product.rating}
										sale={product.sale}
										product={product}
									/>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductSlider;

// !--------------------- old code ------------------
// import React from "react";
// import ProductCard from "./ProductCard";

// const ProductSlider = ({ products }) => {
// 	return (
// 		<div
// 			id="carousel-most-sold"
// 			className="carousel slide d-none d-md-block"
// 			data-bs-ride="carousel"
// 		>
// 			<ol className="carousel-indicators custom-carousel-indicators2">
// 				{products.map((_, index) => (
// 					<li
// 						key={index}
// 						data-bs-target="#carousel-most-sold"
// 						data-bs-slide-to={index}
// 						className={index === 0 ? "active" : ""}
// 					></li>
// 				))}
// 			</ol>
// 			<div className="carousel-inner">
// 				{products.map((group, groupIndex) => (
// 					<div
// 						key={groupIndex}
// 						className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
// 					>
// 						<div className="row">
// 							{group.map((product, productIndex) => (
// 								<div
// 									key={productIndex}
// 									className={`col-lg-3 col-md-4 ${
// 										productIndex === 3 ? "d-none d-lg-block" : ""
// 									}`}
// 								>
// 									<ProductCard {...product} />
// 								</div>
// 							))}
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default ProductSlider;
