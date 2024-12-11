

// Checkout.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartTable from "../components/CartTable";
import SuggestedProducts from "../components/ProductSuggestions";
import "../styles/css/style.css";
import Breadcrumb from "../components/Breadcrumb";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, totalPrice, updateCartItem, removeCartItem, addToCart } =
		useCart();

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <Breadcrumb category={"سلة المشتريات"} />
        <div className="borders-between">
          <div className="row">
            <h1 className="heading custom-heading">عربة الشراء</h1>
            <CartTable
              cartItems={cartItems}
              updateCartItem={updateCartItem}
              removeCartItem={removeCartItem}
              totalPrice={totalPrice}
            />
          </div>
          <SuggestedProducts addToCart={addToCart} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;





//! ----------------------------------- old code 2 ----------------------------------
// import React from "react";
// import Navbar from "../components/Navbar";
// import "../styles/css/style.css";
// import Footer from "../components/Footer";

// const Checkout = () => {
// 	return (
// 		<div className="container-fluid">
// 			{/* Navbar */}
// 			<Navbar />
// 			{/* End Navbar */}

// 			<div className="container">
// 				{/* Breadcrumb */}
// 				<div
// 					className="row"
// 					aria-label="breadcrumb"
// 					style={{ "--bs-breadcrumb-divider": "'>'" }}
// 				>
// 					<ol className="breadcrumb custom-breadcrumb">
// 						<li className="breadcrumb-item">
// 							<a href="./index.html">الصفحة الرئيسية</a>
// 						</li>
// 						<li className="breadcrumb-item active">عربة الشراء</li>
// 					</ol>
// 				</div>
// 				{/* End Breadcrumb */}

// 				<div className="borders-between">
// 					<div className="row">
// 						<h1 className="heading custom-heading">عربة الشراء</h1>
// 						<form action="/payment" id="form-checkout">
// 							<table className="custom-table">
// 								<thead>
// 									<tr>
// 										<th>المنتج</th>
// 										<th>السعر</th>
// 										<th>العدد المطلوب</th>
// 										<th className="hide-on-small">السعر الإجمالي</th>
// 										<th></th>
// 									</tr>
// 								</thead>
// 								<tbody>
// 									<tr data-product-info data-product-price="400">
// 										<td>
// 											<div className="custom-media d-flex">
// 												<img
// 													src="./images/adidas_3.png"
// 													alt="adidas"
// 													className="d-none d-md-block"
// 												/>
// 												<div>
// 													<h4>تي شيرت رجالي من لاكوست</h4>
// 													<div className="custom-text-muted">ملابس رجالي</div>
// 												</div>
// 											</div>
// 										</td>
// 										<td>400$</td>
// 										<td>
// 											<select
// 												name="product1"
// 												className="custom-form-control quantity"
// 												id="product-quantity"
// 												data-product-quantity
// 											>
// 												<option value="1">1</option>
// 												<option value="2">2</option>
// 												<option value="3" selected>
// 													3
// 												</option>
// 											</select>
// 										</td>
// 										<td className="total-price-for-product hide-on-small">
// 											1200$
// 										</td>
// 										<td>
// 											<button
// 												className="btn custom-btn-outline-danger"
// 												data-remove-from-card
// 											>
// 												<i className="far fa-trash-alt d-md-none d-block"></i>
// 												<span className="d-none d-md-block">حذف</span>
// 											</button>
// 										</td>
// 									</tr>
// 									<tr data-product-info data-product-price="200">
// 										<td>
// 											<div className="custom-media d-flex">
// 												<img
// 													src="./images/adidas_1.png"
// 													alt="adidas"
// 													className="d-none d-md-block"
// 												/>
// 												<div>
// 													<h4>تي شيرت رجالي من لاكوست</h4>
// 													<div className="custom-text-muted">ملابس رجالي</div>
// 												</div>
// 											</div>
// 										</td>
// 										<td>200$</td>
// 										<td>
// 											<select
// 												name="product1"
// 												className="custom-form-control quantity"
// 												data-product-quantity
// 											>
// 												<option value="1">1</option>
// 												<option value="2" selected>
// 													2
// 												</option>
// 												<option value="3">3</option>
// 											</select>
// 										</td>
// 										<td className="total-price-for-product hide-on-small">
// 											400$
// 										</td>
// 										<td>
// 											<button
// 												className="btn custom-btn-outline-danger"
// 												data-remove-from-card
// 											>
// 												<i className="far fa-trash-alt d-md-none d-block"></i>
// 												<span className="d-none d-md-block">حذف</span>
// 											</button>
// 										</td>
// 									</tr>
// 								</tbody>
// 								<tfoot>
// 									<tr>
// 										<td colSpan="5" className="total-price custom-text-muted">
// 											<span>السعر الإجمالي لجميع المنتجات: </span>
// 											<span id="total-price-for-all-product">1600</span>
// 											<span>دولار</span>
// 										</td>
// 									</tr>
// 								</tfoot>
// 							</table>
// 							<button
// 								type="submit"
// 								className="btn custom-btn-warning custom-btn-with-icon ms-3 mb-4"
// 							>
// 								<span>
// 									إكمال عملية الشراء
// 									<i className="fas fa-dollar-sign fa-lg"></i>
// 								</span>
// 							</button>
// 						</form>
// 					</div>
// 					<div className="row suggestions">
// 						<h3 className="heading">اقترحنا لك</h3>
// 						<div className="row">
// 							<div className="col-lg-3 col-md-4">
// 								<div className="card custom-thumbnail">
// 									<div className="overlay">
// 										<button className="btn add-to-cart-btn">
// 											إضافة إلى العربة
// 											<i className="fas fa-cart-plus"></i>
// 										</button>
// 									</div>
// 									<img src="./images/most_sold_1.jpg" alt="فلورا تي شيرت" />
// 									<div className="card-body p-2">
// 										<div className="clearfix">
// 											<h4 className="float-start">فلورا تي شيرت</h4>
// 											<div className="price float-end">200$</div>
// 										</div>
// 										<div className="rating">
// 											<i className="fa-solid fa-star active"></i>
// 											<i className="fa-solid fa-star active"></i>
// 											<i className="fa-solid fa-star active"></i>
// 											<i className="fa-regular fa-star"></i>
// 											<i className="fa-regular fa-star"></i>
// 										</div>
// 										<button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
// 											إضافة إلى العربة
// 											<i className="fas fa-cart-plus"></i>
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 							{/* Additional products can be added similarly */}
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			<Footer/>
// 		</div>
// 	);
// };

// export default Checkout;


console.log("");

//! ----------------------------------- old code ----------------------------------
// import React from 'react'
// import Navbar from '../components/Navbar';
// import '../styles/css/style.css';

// const Checkout = () => {
//   return (
//     <div className="conatiner-fluid">
//         {/* <!-- القائمة العلوية -->  */}
//         <Navbar/>
//         {/* <!-- نهاية القائمة العلوية --> */}

//         <div className="container">
//             {/* <!-- القائمة الفرعية --> */}
//             <div className="container">
//                 <div className="row" aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
//                     <ol className="breadcrumb custom-breadcrumb">
//                         <li className="breadcrumb-item">
//                             <a href="./index.html">الصفحة الرئيسية</a>
//                         </li>
//                         <li className="breadcrumb-item active">
//                             عربة الشراء
//                         </li>
//                     </ol>
//                 </div>
//             </div>
//             {/* <!-- نهاية القائمة الفرعية --> */}
//             <div className="borders-between">
//                 <div className="row">
//                     <h1 className="heading custom-heading">عربة الشراء</h1>
//                     <form action="./payment.html" id="form-checkout">
//                         <table className="custom-table">
//                             <thead>
//                                 <tr>
//                                     <th>المنتج</th>
//                                     <th>السعر</th>
//                                     <th>العدد المطلوب</th>
//                                     <th className="hide-on-small">السعر الإجمالي</th>
//                                     <th></th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <tr data-product-info data-product-price="400">
//                                     <td>
//                                         <div className="custom-media d-flex">
//                                             <img src="./images/adidas_3.png" alt="adidas" className="d-none d-md-block"/>
//                                             <div>
//                                                 <h4>تي شيرت رجالي من لاكوست</h4>
//                                                 <div className="custom-text-muted">
//                                                     ملابس رجالي
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         400$
//                                     </td>
//                                     <td>
//                                         <select name="product1" className="custom-form-control qunatity" id="product-quantity" data-product-quantity>
//                                             <option value="1">1</option>
//                                             <option value="2">2</option>
//                                             <option value="3" selected>3</option>
//                                         </select>
//                                     </td>
//                                     <td className="total-price-for-product hide-on-small">
//                                         1200$
//                                     </td>
//                                     <td>
//                                         <button className="btn custom-btn-outline-danger" data-remove-from-card>
//                                             <i className="far fa-trash-alt d-md-none d-block"></i>
//                                             <span className="d-none d-md-block">حذف</span>
//                                         </button>
//                                     </td>
//                                 </tr>
//                                 <tr data-product-info data-product-price="200">
//                                     <td>
//                                         <div className="custom-media d-flex">
//                                             <img src="./images/adidas_1.png" alt="adidas" className="d-none d-md-block"/>
//                                             <div>
//                                                 <h4>تي شيرت رجالي من لاكوست</h4>
//                                                 <div className="custom-text-muted">
//                                                     ملابس رجالي
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         200$
//                                     </td>
//                                     <td>
//                                         <select name="product1" className="custom-form-control qunatity" data-product-quantity>
//                                             <option value="1">1</option>
//                                             <option value="2" selected>2</option>
//                                             <option value="3">3</option>
//                                         </select>
//                                     </td>
//                                     <td className="total-price-for-product hide-on-small">
//                                         400$
//                                     </td>
//                                     <td>
//                                         <button className="btn custom-btn-outline-danger" data-remove-from-card>
//                                             <i className="far fa-trash-alt d-md-none d-block"></i>
//                                             <span className="d-none d-md-block">حذف</span>
//                                         </button>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                             <tfoot>
//                                 <tr>
//                                     <td colspan="5" className="total-price custom-text-muted">
//                                         <span>السعر الإجمالي لجميع المنتجات: </span>
//                                         <span id="total-price-for-all-product">1600</span>
//                                         <span>دولار</span>
//                                     </td>
//                                 </tr>
//                             </tfoot>
//                         </table>
//                         <button type="submit" className="btn custom-btn-warning custom-btn-with-icon ms-3 mb-4">
//                             <span>
//                                 إكمال عملية الشراء
//                                 <i className="fas fa-dollar-sign fa-lg"></i>
//                             </span>
//                         </button>
//                     </form>
//                 </div>
//                 <div className="row suggestions">
//                     <h3 className="heading">
//                         اقترحنا لك
//                     </h3>
//                     <div className="row">
//                         <div className="col-lg-3 col-md-4">
//                             <div className="card custom-thumbnail">
//                                 <div className="overlay">
//                                     <button className="btn add-to-cart-btn">
//                                         إضافة إلى العربة
//                                         <i className="fas fa-cart-plus"></i>
//                                     </button>
//                                 </div>
//                                 <img src="./images/most_sold_1.jpg" alt="فلورا تي شيرت"/>
//                                 <div className="card-body p-2">
//                                     <div className="clearfix">
//                                         <h4 className="float-start">فلورا تي شيرت</h4>
//                                         <div className="price float-end">200$</div>
//                                     </div>
//                                     <div className="rating">
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-regular fa-star"></i>
//                                         <i className="fa-regular fa-star"></i>
//                                     </div>
//                                     <button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
//                                         إضافة إلى العربة
//                                         <i className="fas fa-cart-plus"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-4">
//                             <div className="card custom-thumbnail">
//                                 <div className="overlay">
//                                     <button className="btn add-to-cart-btn">
//                                         إضافة إلى العربة
//                                         <i className="fas fa-cart-plus"></i>
//                                     </button>
//                                 </div>
//                                 <img src="./images/most_sold_2.jpg" alt="فلورا تي شيرت"/>
//                                 <div className="card-body p-2">
//                                     <div className="clearfix">
//                                         <h4 className="float-start">فلورا تي شيرت</h4>
//                                         <div className="price float-end">200$</div>
//                                     </div>
//                                     <div className="rating">
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                     </div>
//                                     <button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
//                                         إضافة إلى العربة
//                                         <i className="fas fa-cart-plus"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-4">
//                             <div className="card custom-thumbnail">
//                                 <div className="sale">50%</div>
//                                 <div className="overlay">
//                                     <button className="btn add-to-cart-btn">
//                                         إضافة إلى العربة
//                                         <i className="fas fa-cart-plus"></i>
//                                     </button>
//                                 </div>
//                                 <img src="./images/most_sold_3.jpg" alt="فلورا تي شيرت"/>
//                                 <div className="card-body p-2">
//                                     <div className="clearfix">
//                                         <h4 className="float-start">فلورا تي شيرت</h4>
//                                         <div className="price float-end">200$</div>
//                                     </div>
//                                     <div className="rating">
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-regular fa-star"></i>
//                                         <i className="fa-regular fa-star"></i>
//                                     </div>
//                                     <button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
//                                         إضافة إلى العربة
//                                         <i className="fas fa-cart-plus"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-3 col-md-4 d-none d-lg-block">
//                             <div className="card custom-thumbnail">
//                                 <div className="overlay">
//                                     <button className="btn add-to-cart-btn">
//                                         إضافة إلى العربة
//                                         <i className="fas fa-cart-plus"></i>
//                                     </button>
//                                 </div>
//                                 <img src="./images/adidas_4.png" alt="فلورا تي شيرت"/>
//                                 <div className="card-body p-2">
//                                     <div className="clearfix">
//                                         <h4 className="float-start">فلورا تي شيرت</h4>
//                                         <div className="price float-end">200$</div>
//                                     </div>
//                                     <div className="rating">
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-solid fa-star active"></i>
//                                         <i className="fa-regular fa-star"></i>
//                                     </div>
//                                     <button className="btn add-to-cart-btn d-block d-lg-none mx-auto">
//                                         إضافة إلى العربة
//                                         <i className="fas fa-cart-plus"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
    
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <footer className="row">
//             <div id="brand-logos" className="text-center">
//                 <span>المتجر وكيل مُعتمد لكبرى الشركات العالمية</span>
//                 <div className="img-container">
//                     <img src="./images/adidas.png" alt="adidas"/>
//                     <img src="./images/lacoste.png" alt="lacoste"/>
//                     <img src="./images/puma.png" alt="puma"/>
//                     <img src="./images/polo.png" alt="polo"/>
//                 </div>
//             </div>
//             <div id="footer-nav" className="text-center">
//                 <div className="footer-logo">
//                     <a href="./">
//                         <img src="./images/logo_footer.png" alt="logo"/>
//                     </a>
//                 </div>
//                 <div className="footer-nav-links d-none d-md-block">
//                     <a href="./index.html">الصفحة الرئيسية</a>
//                     <a href="search.html">البحث المتقدم</a>
//                     <a href="contact.html">تواصل معنا</a>
//                 </div>
//                 <div className="newsletter col-md-6 offset-md-3 d-flex align-items-center justify-content-center">
//                     <form>
//                         <label for="footer-input">تابع النشرة البريدية لأحدث العروض</label>
//                         <br/>
//                         <div className="input-group">
//                             <input type="email" name="email" id="footer-input" className="form-control custom-form-control" placeholder="البريد الإلكتروني"/>
//                             <button type="submit" className="btn custom-btn-warning">متابعة</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <div id="footer-copyright-social">
//                 <div className="container">
//                     <div className="clearfix">
//                         <div id="copyright" className="float-start">
                            
//                         </div>
//                         <div id="social-icons" className="float-end">
//                             <a href="https://www.facebook.com">
//                                 <i className="fab fa-facebook-square fa-lg"></i>
//                             </a>
//                             <a href="https://www.twitter.com">
//                                 <i className="fab fa-twitter-square fa-lg"></i>
//                             </a>
//                             <a href="https://www.instagram.com">
//                                 <i className="fab fa-instagram fa-lg"></i>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     </div>
//   )
// }

// export default Checkout