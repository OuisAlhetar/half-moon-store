import React from "react";
import { Link } from "react-router-dom";

const ProductSlide = ({ id, images, category, title, sale, isActive }) => {
	return (
		<div className={`carousel-item ${isActive ? "active" : ""}`}>
			<div className="container">
				<div className="row">
					<div className="col-md-4 offset-lg-2 text-center">
						<img src={images[0]} alt={title} />
					</div>
					<div className="col-md-8 col-lg-6">
						<div className="product-details">
							<div className="product-category">{category}</div>
							{sale && (
								<div className="sale large">
									{sale}
									<span className="fs-6">خصم</span>
								</div>
							)}
							<h1>{title}</h1>
							<Link
								// todo: correct this routing depending on the id of product:
								to={`product/${id}`}
								class="btn btn-lg btn-outline-warning mt-3"
							>
								تسوّق الآن
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductSlide;
