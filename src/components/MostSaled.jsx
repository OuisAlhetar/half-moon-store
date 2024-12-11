import React from "react";
import ProductSlider from "./ProductSlider";
import ProductCard from "./ProductCard";
import { useProducts } from "../context/testContext";

const MostSaled = () => {
	const { products } = useProducts();

	// Filter products for the "الأكثر مبيعًا" category
	const mostSoldProducts = products.filter(
		(product) => product.category === "الأكثر مبيعًا"
	);

	// Group products into slides of 4
	const groupedProducts = [];
	for (let i = 0; i < mostSoldProducts.length; i += 4) {
		groupedProducts.push(mostSoldProducts.slice(i, i + 4));
	}

	return (
		<div className="container">
			<div className="row">
				<h3 className="heading text-center">الأكثر مبيعًا</h3>

				{/* Desktop view */}
				<div className="d-none d-md-block">
					<ProductSlider products={groupedProducts} />
				</div>

				{/* Mobile view */}
				<div className="d-md-none">
					<div className="row">
						{mostSoldProducts.map((product) => (
							<div key={product.id} className="col-12 mb-3">
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
			</div>
		</div>
	);
};

export default MostSaled;

// !---------------- old code ---------------
// import React from "react";
// import ProductSlider from "./ProductSlider";
// import ProductCard from "./ProductCard";

// const MostSaled = () => {
// 	const products = [
// 		// First slide
// 		[
// 			{
// 				image: "/images/most_sold_1.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 3,
// 			},
// 			{
// 				image: "/images/most_sold_2.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 5,
// 			},
// 			{
// 				image: "/images/most_sold_3.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 3,
// 				sale: "50%",
// 			},
// 			{
// 				image: "/images/adidas_4.png",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 4,
// 			},
// 		],
// 		// Second slide
// 		[
// 			{
// 				image: "/images/most_sold_2.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 4,
// 			},
// 			{
// 				image: "/images/most_sold_3.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 5,
// 			},
// 			{
// 				image: "/images/most_sold_1.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 0,
// 			},
// 			{
// 				image: "/images/adidas_3.png",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 5,
// 			},
// 		],
// 		// Third slide
// 		[
// 			{
// 				image: "/images/polo_2.jpg",
// 				title: "قميص سترتش فت",
// 				price: "100$",
// 				rating: 3,
// 			},
// 			{
// 				image: "/images/adidas_2.jpg",
// 				title: "حذاء بيور بوست",
// 				price: "150$",
// 				rating: 3,
// 			},
// 			{
// 				image: "/images/polo_1.jpg",
// 				title: "قميص سليم-فت",
// 				price: "85$",
// 				rating: 3,
// 			},
// 			{
// 				image: "/images/lacoste_2.jpg",
// 				title: "حقيبة شانتاكو",
// 				price: "200$",
// 				rating: 3,
// 				sale: "50%",
// 			},
// 		],
// 	];

// 	// Flatten the products array for mobile view
// 	const flatProducts = products.flat();

// 	return (
// 		<div className="container">
// 			<div className="row">
// 				<h3 className="heading text-center">الأكثر مبيعًا</h3>

// 				{/* Desktop view */}
// 				<div className="d-none d-md-block">
// 					<ProductSlider products={products} />
// 				</div>

// 				{/* Mobile view */}
// 				<div className="d-md-none">
// 					<div className="row">
// 						{flatProducts.map((product, index) => (
// 							<div key={index} className="row-col-1 mb-3">
// 								<ProductCard {...product} />
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default MostSaled;

console.log();

//! ----------------- old code ------------
// import React from "react";
// import ProductSlider from "./ProductSlider";

// const MostSaled = () => {
// 	const products = [
// 		// First slide
// 		[
// 			{
// 				image: "/images/most_sold_1.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 3,
// 			},
// 			{
// 				image: "/images/most_sold_2.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 5,
// 			},
// 			{
// 				image: "/images/most_sold_3.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 3,
// 				sale: "50%",
// 			},
// 			{
// 				image: "/images/adidas_4.png",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 4,
// 			},
// 		],
// 		// Second slide
// 		[
// 			{
// 				image: "/images/most_sold_2.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 4,
// 			},
// 			{
// 				image: "/images/most_sold_3.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 5,
// 			},
// 			{
// 				image: "/images/most_sold_1.jpg",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 0,
// 			},
// 			{
// 				image: "/images/adidas_3.png",
// 				title: "فلورا تي شيرت",
// 				price: "200$",
// 				rating: 5,
// 			},
// 		],
// 		// Third slide
// 		[
// 			{
// 				image: "/images/polo_2.jpg",
// 				title: "قميص سترتش فت",
// 				price: "100$",
// 				rating: 3,
// 			},
// 			{
// 				image: "/images/adidas_2.jpg",
// 				title: "حذاء بيور بوست",
// 				price: "150$",
// 				rating: 3,
// 			},
// 			{
// 				image: "/images/polo_1.jpg",
// 				title: "قميص سليم-فت",
// 				price: "85$",
// 				rating: 3,
// 			},
// 			{
// 				image: "/images/lacoste_2.jpg",
// 				title: "حقيبة شانتاكو",
// 				price: "200$",
// 				rating: 3,
// 				sale: "50%",
// 			},
// 		],
// 	];

// 	return (
// 		<div className="container">
// 			<div className="row">
// 				<h3 className="heading text-center">الأكثر مبيعًا</h3>
// 				<ProductSlider products={products} />
// 				{/* You can add the mobile version carousel here if needed */}
// 			</div>
// 		</div>
// 	);
// };

// export default MostSaled;

//! ----------------------------- old code ----------------------------------
// import React from 'react'

// const MostSaled = () => {
//   return (
// 		<div className="container">
// 			<div className="row">
// 				<h3 className="heading text-center">الأكثر مبيعًا</h3>
// 				<div
// 					id="carousel-most-sold"
// 					className="carousel slide d-none d-md-block"
// 					data-bs-ride="carousel"
// 				>
// 					<ol className="carousel-indicators custom-carousel-indicators2">
// 						<li
// 							data-bs-target="#carousel-most-sold"
// 							data-bs-slide-to="0"
// 							className="active"
// 						></li>
// 						<li data-bs-target="#carousel-most-sold" data-bs-slide-to="1"></li>
// 						<li data-bs-target="#carousel-most-sold" data-bs-slide-to="2"></li>
// 					</ol>
// 					<div className="carousel-inner">
// 						<div className="carousel-item active">
// 							<div className="row">
// 								<div className="col-lg-3 col-md-4">
// 									<div className="card custom-thumbnail">
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img
// 											src="/images/most_sold_1.jpg"
// 											alt="فلورا تي شيرت"
// 										/>
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">فلورا تي شيرت</h4>
// 												<div className="price float-end">200$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-regular fa-star"></i>
// 												<i className="fa-regular fa-star"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>

// 								<div className="col-lg-3 col-md-4">
// 									<div className="card custom-thumbnail">
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img
// 											src="/images/most_sold_2.jpg"
// 											alt="فلورا تي شيرت"
// 										/>
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">فلورا تي شيرت</h4>
// 												<div className="price float-end">200$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>

// 								<div className="col-lg-3 col-md-4">
// 									<div className="card custom-thumbnail">
// 										<div className="sale">50%</div>
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img
// 											src="/images/most_sold_3.jpg"
// 											alt="فلورا تي شيرت"
// 										/>
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">فلورا تي شيرت</h4>
// 												<div className="price float-end">200$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-regular fa-star"></i>
// 												<i className="fa-regular fa-star"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>

// 								<div className="col-lg-3 col-md-4 d-none d-lg-block">
// 									<div className="card custom-thumbnail">
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img
// 											src="/images/adidas_4.png"
// 											alt="فلورا تي شيرت"
// 										/>
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">فلورا تي شيرت</h4>
// 												<div className="price float-end">200$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-regular fa-star"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>

// 							</div>
// 						</div>

// 						<div className="carousel-item">
// 							<div className="row">
// 								<div className="col-lg-3 col-md-4">
// 									<div className="card custom-thumbnail">
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img
// 											src="/images/most_sold_2.jpg"
// 											alt="فلورا تي شيرت"
// 										/>
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">فلورا تي شيرت</h4>
// 												<div className="price float-end">200$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-regular fa-star"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>

// 								<div className="col-lg-3 col-md-4">
// 									<div className="card custom-thumbnail">
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img
// 											src="/images/most_sold_3.jpg"
// 											alt="فلورا تي شيرت"
// 										/>
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">فلورا تي شيرت</h4>
// 												<div className="price float-end">200$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>

// 								<div className="col-lg-3 col-md-4">
// 									<div className="card custom-thumbnail">
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img
// 											src="/images/most_sold_1.jpg"
// 											alt="فلورا تي شيرت"
// 										/>
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">فلورا تي شيرت</h4>
// 												<div className="price float-end">200$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fa-regular fa-star"></i>
// 												<i className="fa-regular fa-star"></i>
// 												<i className="fa-regular fa-star"></i>
// 												<i className="fa-regular fa-star"></i>
// 												<i className="fa-regular fa-star"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>

// 								<div className="col-lg-3 col-md-4 d-none d-lg-block">
// 									<div className="card custom-thumbnail">
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img
// 											src="/images/adidas_3.png"
// 											alt="فلورا تي شيرت"
// 										/>
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">فلورا تي شيرت</h4>
// 												<div className="price float-end">200$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 												<i className="fa-solid fa-star active"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة إلى العربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>

// 						<div className="carousel-item">
// 							<div className="row">
// 								{/* <!--منتج--> */}
// 								<div className="col-lg-3 col-md-4">
// 									<div className="card custom-thumbnail" data-product="">
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة للعربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img src="/images/polo_2.jpg" alt="قميص سترتش فت" />
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">قميص سترتش فت</h4>
// 												<div className="price float-end">100$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star"></i>
// 												<i className="fas fa-star"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة للعربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								{/* <!--نهاية منتج--> */}

// 								{/* <!--منتج--> */}
// 								<div className="col-lg-3 col-md-4">
// 									<div className="card custom-thumbnail" data-product="">
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة للعربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img
// 											src="/images/adidas_2.jpg"
// 											alt="حذاء بيور بوست"
// 										/>
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">حذاء بيور بوست</h4>
// 												<div className="price float-end">150$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star"></i>
// 												<i className="fas fa-star"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة للعربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								{/* <!--نهاية منتج--> */}

// 								{/* <!--منتج--> */}
// 								<div className="col-lg-3 col-md-4">
// 									<div className="card custom-thumbnail" data-product="">
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة للعربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img src="/images/polo_1.jpg" alt="قميص سليم-فت" />
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">قميص سليم-فت</h4>
// 												<div className="price float-end">85$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star"></i>
// 												<i className="fas fa-star"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة للعربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								{/* <!--نهاية منتج--> */}

// 								{/* <!--منتج--> */}
// 								<div className="col-lg-3 col-md-4 d-none d-lg-block">
// 									<div className="card custom-thumbnail" data-product="">
// 										<div className="sale">50%</div>
// 										<div className="overlay">
// 											<button className="btn add-to-cart-btn">
// 												إضافة للعربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 										<img
// 											src="/images/lacoste_2.jpg"
// 											alt="حقيبة شانتاكو"
// 										/>
// 										<div className="card-body p-2">
// 											<div className="clearfix">
// 												<h4 className="float-start">حقيبة شانتاكو</h4>
// 												<div className="price float-end">200$</div>
// 											</div>
// 											<div className="rating">
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star active"></i>
// 												<i className="fas fa-star"></i>
// 												<i className="fas fa-star"></i>
// 											</div>
// 											<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 												إضافة للعربة
// 												<i className="fas fa-cart-plus"></i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								{/* <!--نهاية منتج--> */}

// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div
// 					id="carousel-most-sold-altrenative"
// 					className="carousel slide d-md-none d-block"
// 					data-bs-ride="carousel"
// 				>
// 					<div className="carousel-inner">
// 						<div className="carousel-item active">
// 							<div className="card custom-thumbnail">
// 								<div className="overlay">
// 									<button className="btn add-to-cart-btn">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 								<img src="/images/most_sold_1.jpg" alt="فلورا تي شيرت" />
// 								<div className="card-body p-2">
// 									<div className="clearfix">
// 										<h4 className="float-start">فلورا تي شيرت</h4>
// 										<div className="price float-end">200$</div>
// 									</div>
// 									<div className="rating">
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-regular fa-star"></i>
// 										<i className="fa-regular fa-star"></i>
// 									</div>
// 									<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="carousel-item">
// 							<div className="card custom-thumbnail">
// 								<div className="overlay">
// 									<button className="btn add-to-cart-btn">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 								<img src="/images/adidas_4.png" alt="فلورا تي شيرت" />
// 								<div className="card-body p-2">
// 									<div className="clearfix">
// 										<h4 className="float-start">فلورا تي شيرت</h4>
// 										<div className="price float-end">200$</div>
// 									</div>
// 									<div className="rating">
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-regular fa-star"></i>
// 										<i className="fa-regular fa-star"></i>
// 									</div>
// 									<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="carousel-item">
// 							<div className="card custom-thumbnail">
// 								<div className="overlay">
// 									<button className="btn add-to-cart-btn">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 								<img src="/images/adidas_1.jpg" alt="فلورا تي شيرت" />
// 								<div className="card-body p-2">
// 									<div className="clearfix">
// 										<h4 className="float-start">فلورا تي شيرت</h4>
// 										<div className="price float-end">200$</div>
// 									</div>
// 									<div className="rating">
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-regular fa-star"></i>
// 										<i className="fa-regular fa-star"></i>
// 									</div>
// 									<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="carousel-item">
// 							<div className="card custom-thumbnail">
// 								<div className="overlay">
// 									<button className="btn add-to-cart-btn">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 								<img src="/images/adidas_4.jpg" alt="فلورا تي شيرت" />
// 								<div className="card-body p-2">
// 									<div className="clearfix">
// 										<h4 className="float-start">فلورا تي شيرت</h4>
// 										<div className="price float-end">200$</div>
// 									</div>
// 									<div className="rating">
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-regular fa-star"></i>
// 										<i className="fa-regular fa-star"></i>
// 									</div>
// 									<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="carousel-item">
// 							<div className="card custom-thumbnail">
// 								<div className="overlay">
// 									<button className="btn add-to-cart-btn">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 								<img src="/images/most_sold_3.jpg" alt="فلورا تي شيرت" />
// 								<div className="card-body p-2">
// 									<div className="clearfix">
// 										<h4 className="float-start">فلورا تي شيرت</h4>
// 										<div className="price float-end">200$</div>
// 									</div>
// 									<div className="rating">
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-regular fa-star"></i>
// 										<i className="fa-regular fa-star"></i>
// 									</div>
// 									<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="carousel-item">
// 							<div className="card custom-thumbnail">
// 								<div className="overlay">
// 									<button className="btn add-to-cart-btn">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 								<img src="/images/most_sold_2.jpg" alt="فلورا تي شيرت" />
// 								<div className="card-body p-2">
// 									<div className="clearfix">
// 										<h4 className="float-start">فلورا تي شيرت</h4>
// 										<div className="price float-end">200$</div>
// 									</div>
// 									<div className="rating">
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-solid fa-star active"></i>
// 										<i className="fa-regular fa-star"></i>
// 										<i className="fa-regular fa-star"></i>
// 									</div>
// 									<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 										إضافة إلى العربة
// 										<i className="fas fa-cart-plus"></i>
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="text-center">
// 						<button
// 							className="btn arrow-btn"
// 							data-bs-target="#carousel-most-sold-altrenative"
// 							data-bs-slide="prev"
// 						>
// 							<i className="fas fa-chevron-right"></i>
// 						</button>
// 						<button
// 							className="btn arrow-btn"
// 							data-bs-target="#carousel-most-sold-altrenative"
// 							data-bs-slide="next"
// 						>
// 							<i className="fas fa-chevron-left"></i>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default MostSaled
