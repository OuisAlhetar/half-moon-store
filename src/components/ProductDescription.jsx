import React from "react";

const ProductDescription = ({ description }) => (
	<div className="more-description">
		<h3 className="heading heading-with-border-bottom heading-inline">
			وصف المنتج
		</h3>
		<p>{description}</p>
		{/* Add product features list here if needed */}
	</div>
);

export default ProductDescription;
