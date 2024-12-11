
import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../styles/sass/custom.scss";
import "@fortawesome/fontawesome-free/js/all.min";
import "../styles/sass/style.scss";
import ProductSlide from "./ProductSlide";
import CarouselIndicators from "./CarouselIndicators";
import { useProducts } from "../context/testContext";

const MostPopularProducts = () => {
	const test = useProducts();
	// console.log(test.products);
	const products = test.products;
	return (
		<div className="row">
			<div
				id="carousel-featured"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<CarouselIndicators products={products} />
				<div className="carousel-inner">
					{products.map((product, index) => (
						<ProductSlide key={index} {...product} isActive={index === 0} />
					))}
				</div>
				<button
					className="carousel-control-prev"
					data-bs-target="#carousel-featured"
					data-bs-slide="prev"
				>
					<i className="fa-solid fa-chevron-right"></i>
				</button>
				<button
					className="carousel-control-next"
					data-bs-target="#carousel-featured"
					data-bs-slide="next"
				>
					<i className="fa-solid fa-chevron-left"></i>
				</button>
			</div>
		</div>
	);
};

export default MostPopularProducts;












// !------------------------ old code -------------------------
// import React from "react";

// import "bootstrap/dist/js/bootstrap.bundle.js";

// import "../styles/sass/custom.scss";
// import "@fortawesome/fontawesome-free/js/all.min";
// import "../styles/sass/style.scss";

// const MostPopularProducts = () => {
// 	return (
// 		<div className="row">
// 			<div
// 				id="carousel-featured"
// 				className="carousel slide"
// 				data-bs-ride="carousel"
// 			>
// 				<div className="carousel-indicators custom-carousel-indicators d-none d-md-block">
// 					<img
// 						src="/public/images/lacoste_1.png"
// 						className="active custom-carousel-indicators-primary"
// 						data-bs-target="#carousel-featured"
// 						data-bs-slide-to="0"
// 						alt="تي شيرت رجالي من لاكوست"
// 					/>
// 					<img
// 						src="/public/images/lacoste_2.png"
// 						className="custom-carousel-indicators-primary"
// 						data-bs-target="#carousel-featured"
// 						data-bs-slide-to="1"
// 						alt="حقيبة شانتاكو نسائية"
// 					/>
// 					<img
// 						src="/public/images/lacoste_3.png"
// 						className="custom-carousel-indicators-primary"
// 						data-bs-target="#carousel-featured"
// 						data-bs-slide-to="2"
// 						alt="تي شيرت بولو"
// 					/>
// 					<img
// 						src="/public/images/adidas_3.png"
// 						className="custom-carousel-indicators-primary"
// 						data-bs-target="#carousel-featured"
// 						data-bs-slide-to="3"
// 						alt="بدلة فايربرد الرياضية"
// 					/>
// 				</div>
// 				<div className="carousel-inner">
// 					<div className="carousel-item active">
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-md-4 offset-lg-2 text-center">
// 									<img
// 										src="/public/images/lacoste_1.png"
// 										alt="تي شيرت رجالي من لاكوست"
// 									/>
// 								</div>
// 								<div className="col-md-8 col-lg-6">
// 									<div className="product-details">
// 										<div className="product-category">تخفيضات</div>
// 										<div className="sale large">
// 											50%
// 											<span className="fs-6">خصم</span>
// 										</div>
// 										<h1>تي شيرت رجالي من لاكوست</h1>
// 										<a
// 											href="product.html"
// 											className="btn btn-lg custom-btn-outline-warning mt-3"
// 										>
// 											تسوّق الآن
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="carousel-item">
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-md-4 offset-lg-2 text-center">
// 									<img
// 										src="/public/images/lacoste_2.png"
// 										alt="حقيبة شانتاكو نسائية"
// 									/>
// 								</div>
// 								<div className="col-md-8 col-lg-6">
// 									<div className="product-details">
// 										<div className="product-category">نسائي</div>
// 										<h1>حقيبة شانتاكو نسائية</h1>
// 										<a
// 											href="product.html"
// 											className="btn btn-lg custom-btn-outline-warning mt-3"
// 										>
// 											تسوّق الآن
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="carousel-item">
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-md-4 offset-lg-2 text-center">
// 									<img src="/public/images/lacoste_3.png" alt="تي شيرت بولو" />
// 								</div>
// 								<div className="col-md-8 col-lg-6">
// 									<div className="product-details">
// 										<div className="product-category">الأكثر مبيعًا</div>
// 										<h1>تي شيرت بولو</h1>
// 										<a
// 											href="product.html"
// 											className="btn btn-lg custom-btn-outline-warning mt-3"
// 										>
// 											تسوّق الآن
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="carousel-item">
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-md-4 offset-lg-2 text-center">
// 									<img
// 										src="/public/images/adidas_3.png"
// 										alt="بدلة فايربرد الرياضية"
// 									/>
// 								</div>
// 								<div className="col-md-8 col-lg-6">
// 									<div className="product-details">
// 										<div className="product-category">أطفال</div>
// 										<h1>بدلة فايربرد الرياضية</h1>
// 										<a
// 											href="product.html"
// 											className="btn btn-lg custom-btn-outline-warning mt-3"
// 										>
// 											تسوّق الآن
// 										</a>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<button
// 					className="carousel-control-prev"
// 					data-bs-target="#carousel-featured"
// 					data-bs-slide="prev"
// 				>
// 					<i className="fa-solid fa-chevron-right"></i>
// 				</button>
// 				<button
// 					className="carousel-control-next"
// 					data-bs-target="#carousel-featured"
// 					data-bs-slide="next"
// 				>
// 					<i className="fa-solid fa-chevron-left"></i>
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default MostPopularProducts;
