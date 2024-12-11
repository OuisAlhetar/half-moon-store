import React from "react";

const ProductImages = ({ images }) => (
	<div className="col-lg-5 col-md-9 offset-md-2 offset-lg-1 product-images">
		<div
			id="carousel-product-images"
			className="carousel slide"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				{images.map((image, index) => (
					<div
						key={index}
						className={`carousel-item ${index === 0 ? "active" : ""}`}
					>
						<img src={image} alt="" />
					</div>
				))}
			</div>
			<div className="carousel-indicators custom-carousel-indicators">
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt=""
						className={`custom-carousel-indicators-primary ${
							index === 0 ? "active" : ""
						}`}
						data-bs-target="#carousel-product-images"
						data-bs-slide-to={index}
					/>
				))}
			</div>
		</div>
	</div>
);

export default ProductImages;
