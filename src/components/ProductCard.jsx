import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ image, title, price, rating, sale, product }) => {
	const { addToCart } = useCart();
	return (
		<div className="card custom-thumbnail">
			{sale && <div className="sale">{sale}</div>}
			<div className="overlay">
				<button
					className="btn add-to-cart-btn"
					onClick={(e) => {
						e.stopPropagation();
						addToCart(product);
					}}
				>
					إضافة إلى العربة
					<i className="fas fa-cart-plus"></i>
				</button>
			</div>
			<img src={image} alt={title} />
			<div className="card-body p-2">
				<div className="clearfix">
					<h4 className="float-start word-wrap">{title}</h4>
					<div className="price float-end">{price}</div>
				</div>
				<div className="rating">
					{[...Array(5)].map((_, i) => (
						<i
							key={i}
							className={`fa-${i < rating ? "solid" : "regular"} fa-star ${
								i < rating ? "active" : ""
							}`}
						></i>
					))}
				</div>
				<button
					className="btn btn-warning add-to-cart-btn d-block d-lg-none mx-auto"
					onClick={(e) => {
						e.stopPropagation();
						addToCart(product);
					}}
				>
					<span className="text-decoration-none">إضافة إلى العربة</span>
					<i className="fas fa-cart-plus"></i>
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
