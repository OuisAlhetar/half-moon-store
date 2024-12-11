import React from "react";
import { Link } from "react-router-dom";
import '../styles/css/categories.css';
import '../styles/css/style.css';
const Categories = () => {
	const categories = [
		{ name: "Electronics", icon: "fa-laptop" },
		{ name: "Clothing", icon: "fa-tshirt" },
		{ name: "Home & Garden", icon: "fa-home" },
		{ name: "Sports", icon: "fa-futbol" },
		{ name: "Books", icon: "fa-book" },
		{ name: "Beauty", icon: "fa-spa" },
		{ name: "Toys", icon: "fa-gamepad" },
		{ name: "Automotive", icon: "fa-car" },
	];

	return (
		<div id="row-categories">
			<div className="container">
				<h3 className="heading mb-4">التصنيفات</h3>
				<div className="row">
					{categories.map((category, index) => (
						<div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
							<div className="card h-100">
								<div className="card-body text-center">
									<i className={`fas ${category.icon} fa-3x mb-3`}></i>
									<h5 className="card-title">{category.name}</h5>
									<Link
										to={`/category/${category.name.toLowerCase()}`}
										className="btn mt-2"
										style={{ backgroundColor: `#53ccd7` }}
									>
										تصفح التصنيف
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Categories;
