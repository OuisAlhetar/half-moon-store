import React from "react";

const CarouselIndicators = ({ products }) => {
	return (
		<div className="carousel-indicators custom-carousel-indicators d-none d-md-block" dir="ltr">
			{products.map((product, index) => (
				<img
					key={index}
					src={product.images[0]}
					className={`custom-carousel-indicators-primary ${
						index === 0 ? "active" : ""
					}`}
					data-bs-target="#carousel-featured"
					data-bs-slide-to={index}
					alt={product.title}
				/>
			))}
		</div>
	);
};

export default CarouselIndicators;
