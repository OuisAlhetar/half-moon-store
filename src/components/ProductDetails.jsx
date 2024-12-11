import React from "react";

const ProductDetails = ({ product }) => (
	<div className="col-lg-5">
		<form action="" id="form-product-selection" className="borders-between">
			<div className="row">
				<div className="product-category">{product.category}</div>
				<div className="clearfix">
					<h2 className="float-end ">{product.title}</h2>
					<div className="float-start price fs-1">{product.price}$</div>
				</div>
			</div>
			<div className="row">
				<p className="product-description">{product.description}</p>
			</div>
			{/* Add brand and rating here */}
			<div className="row size-and-color">
				<div className="col-md-6">
					المقاسات المتاحة:
					<br />
					{product.sizes.map((size, index) => (
						<div
							key={index}
							className={`product-option size-option ${
								index === 0 ? "active" : ""
							}`}
						>
							<label>
								{size.toUpperCase()}
								<input
									type="radio"
									name="size"
									value={size}
									defaultChecked={index === 0}
								/>
							</label>
						</div>
					))}
				</div>
				<div className="col-md-6">
					الألوان المتاحة:
					<br />
					{product.colors.map((color, index) => (
						<div
							key={index}
							className={`product-option color-option ${
								index === 0 ? "active" : ""
							}`}
							style={{ "background-color": color }}
						>
							<label>
								&nbsp;
								<input
									type="radio"
									name="color"
									value={color}
									defaultChecked={index === 0}
								/>
							</label>
						</div>
					))}
				</div>
			</div>
			{/* Add quantity selection and add to cart button here */}
		</form>
	</div>
);

export default ProductDetails;
