import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ category, title }) => {
	// if (category == "سلة المشتريات") return;
	return (
		<div className="container">
			<div
				className="row"
				aria-label="breadcrumb"
				style={{ "--bs-breadcrumb-divider": "'>'" }}
			>
				<ol className="breadcrumb custom-breadcrumb">
					<li className="breadcrumb-item">
						<Link to={`/`}>
							الصفحة الرئيسية <span className="m-1 text-danger">&gt;</span>
						</Link>
					</li>
					<li className="breadcrumb-item">
						{category=="سلة المشتريات"? category: <Link to={`/category/${category}`}> {category}</Link>}
					</li>
					{title && <li className="breadcrumb-item active">{title}</li>}
				</ol>
			</div>
		</div>
	);
};

export default Breadcrumb;
