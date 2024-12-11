import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Payment = () => {
	return (
		<div className="container-fluid">
			{/* <!-- القائمة العلوية --> */}
			<Navbar />
			{/* <!-- نهاية القائمة العلوية --> */}

			<div className="container">
				{/* <!-- القائمة الفرعية --> */}
				<div
					className="row"
					aria-label="breadcrumb"
					style={{ "--bs-breadcrumb-divider": "'>'" }}
				>
					<ol className="breadcrumb custom-breadcrumb">
						<li className="breadcrumb-item">
							<a href="./index.html">الصفحة الرئيسية</a>
						</li>
						<li className="breadcrumb-item">
							<a href="./checkout.html">عربة الشراء</a>
						</li>
						<li className="breadcrumb-item active">الدفع</li>
					</ol>
				</div>
				{/* <!-- نهاية القائمة الفرعية --> */}

				{/* <!-- نموذج الدفع --> */}
				<form id="form-checkout">
					<div className="row">
						<div className="col-lg-6">
							<h3 className="heading">بياناتك الشخصية</h3>
							<div className="row">
								<div className="col-md-6 mb-3">
									<input
										type="text"
										className="form-control custom-form-control custom-input-details"
										placeholder="الاسم الأول"
										name="first_name"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										type="text"
										className="form-control custom-form-control custom-input-details"
										placeholder="الاسم الأخير"
										name="last_name"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										type="email"
										className="form-control custom-form-control custom-input-details"
										placeholder="البريد الإلكتروني"
										name="email"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										type="text"
										className="form-control custom-form-control custom-input-details"
										placeholder="المنطقة"
										name="area"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<select
										name="country"
										className="form-control custom-form-control custom-input-details"
										required
									>
										<option disabled selected value="">
											اختر دولة
										</option>
										<option value="sa">السعودية</option>
										<option value="eg">مصر</option>
										<option value="jo">الأردن</option>
										<option value="sy">سوريا</option>
									</select>
								</div>
								<div className="col-md-6 mb-3">
									<select
										name="city"
										className="form-control custom-form-control custom-input-details"
										id="paymentcities"
										required
									>
										<option disabled selected value="">
											اختر مدينة
										</option>
									</select>
								</div>
								<div className="col-md-6 mb-3">
									<input
										className="form-control custom-form-control custom-input-details"
										type="text"
										placeholder="رقم الموبايل"
										name="phone"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										className="form-control custom-form-control custom-input-details"
										type="text"
										placeholder="العنوان الأول"
										name="address1"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										className="form-control custom-form-control custom-input-details"
										type="text"
										placeholder="العنوان الثاني (اختياري)"
										name="address2"
									/>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<h3 className="heading">بيانات الدفع</h3>
							<div className="row mb-4">
								<div className="col-md-6">
									<label className="font-weight-bold">
										<input
											type="radio"
											name="payment-method"
											value="credit_card"
											defaultChecked
										/>
										البطاقة الإئتمانية
									</label>
								</div>
								<div className="col-md-6">
									<label className="font-weight-bold">
										<input
											type="radio"
											name="payment-method"
											value="on_delivery"
										/>
										الدفع عند التسليم
									</label>
								</div>
							</div>
							<div className="row" id="credit_card_info">
								<div className="col-md-6 mb-3">
									<input
										type="text"
										className="form-control custom-form-control custom-input-details"
										name="credit_card_number"
										placeholder="رقم البطاقة"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										type="number"
										className="form-control custom-form-control custom-input-details"
										name="credit_card_expiration_month"
										placeholder="شهر الانتهاء"
										min="1"
										max="12"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										type="number"
										className="form-control custom-form-control custom-input-details"
										name="credit_card_expiration_year"
										placeholder="سنة الانتهاء"
										min="2020"
										max="2030"
										required
									/>
								</div>
								<div className="col-md-6 mb-3">
									<input
										type="number"
										className="form-control custom-form-control custom-input-details"
										name="credit_card_cvv"
										placeholder="CVV"
										required
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-4">
						<h2 className="heading">طلبك</h2>
						<table className="custom-table">
							<thead>
								<tr>
									<th>المنتج</th>
									<th>السعر</th>
									<th>العدد المطلوب</th>
									<th className="hide-on-small">السعر الإجمالي</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr data-product-info data-product-price="400">
									<td>
										<div className="custom-media d-flex">
											<img
												src="./images/adidas_3.png"
												alt="adidas"
												className="d-none d-md-block"
											/>
											<div>
												<h4>تي شيرت رجالي من لاكوست</h4>
												<div className="custom-text-muted">ملابس رجالي</div>
											</div>
										</div>
									</td>
									<td>400$</td>
									<td>
										<select
											name="product1"
											className="form-control custom-form-control qunatity"
											id="product-quantity"
											data-product-quantity
										>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3" selected>
												3
											</option>
										</select>
									</td>
									<td className="total-price-for-product hide-on-small">
										1200$
									</td>
									<td>
										<button
											className="btn custom-btn-outline-danger"
											data-remove-from-card
										>
											<i className="far fa-trash-alt d-md-none d-block"></i>
											<span className="d-none d-md-block">حذف</span>
										</button>
									</td>
								</tr>
								<tr data-product-info data-product-price="200">
									<td>
										<div className="custom-media d-flex">
											<img
												src="./images/adidas_1.png"
												alt="adidas"
												className="d-none d-md-block"
											/>
											<div>
												<h4>تي شيرت رجالي من لاكوست</h4>
												<div className="custom-text-muted">ملابس رجالي</div>
											</div>
										</div>
									</td>
									<td>200$</td>
									<td>
										<select
											name="product2"
											className="form-control custom-form-control qunatity"
											data-product-quantity
										>
											<option value="1">1</option>
											<option value="2" selected>
												2
											</option>
											<option value="3">3</option>
										</select>
									</td>
									<td className="total-price-for-product hide-on-small">
										400$
									</td>
									<td>
										<button
											className="btn custom-btn-outline-danger"
											data-remove-from-card
										>
											<i className="far fa-trash-alt d-md-none d-block"></i>
											<span className="d-none d-md-block">حذف</span>
										</button>
									</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colSpan="5" className="total-price custom-text-muted">
										<span>السعر الإجمالي لجميع المنتجات: </span>
										<span id="total-price-for-all-product">1600</span>
										<span>دولار</span>
									</td>
								</tr>
							</tfoot>
						</table>
						<button
							type="submit"
							class="btn custom-btn-warning custom-btn-with-icon ms-3 mb-4"
						>
							<span>
								إكمال عملية الشراء
								<i class="fas fa-dollar-sign fa-lg"></i>
							</span>
						</button>
					</div>
				</form>
				{/* <!-- نهاية نموذج الدفع --> */}
			</div>
			<Footer />
		</div>
	);
};

export default Payment;

// !--------------------------- old code ---------------------------
// import React from 'react'
// import Navbar from '../components/Navbar'

// const Payment = () => {
//   return (
//     <div className="container-fluid">
//         {/* <!-- القائمة العلوية -->  */}
//         <Navbar/>
//         {/* <!-- نهاية القائمة العلوية --> */}

//         <div className="container">
//             {/* <!-- القائمة الفرعية --> */}
//             <div className="row" aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>';">
//                 <ol className="breadcrumb custom-breadcrumb">
//                     <li className="breadcrumb-item">
//                         <a href="./index.html">الصفحة الرئيسية</a>
//                     </li>
//                     <li className="breadcrumb-item">
//                         <a href="./checkout.html">عربة الشراء</a>
//                     </li>
//                     <li className="breadcrumb-item active">
//                         الدفع
//                     </li>
//                 </ol>
//             </div>
//             {/* <!-- نهاية القائمة الفرعية --> */}

//             {/* <!-- نموذج الدفع --> */}
//             <form id="form-checkout">
//                 <div className="row">
//                     <div className="col-lg-6">
//                         <h3 className="heading">بياناتك الشخصية</h3>
//                         <div className="row">
//                             <div className="col-md-6 mb-3">
//                                 <input type="text" className="form-control custom-form-control custom-input-details" placeholder="الاسم الأول" name="first_name" required/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <input type="text" className="form-control custom-form-control custom-input-details" placeholder="الاسم الأخير" name="last_name" required/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <input type="email" className="form-control custom-form-control custom-input-details" placeholder="البريد الإلكتروني" name="email" required/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <input type="text" className="form-control custom-form-control custom-input-details" placeholder="المنطقة" name="area" required/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <select name="country" className="custom-form-control custom-input-details" required>
//                                     <option disabled selected value="">اختر دولة</option>
//                                     <option value="sa">السعودية</option>
//                                     <option value="eg">مصر</option>
//                                     <option value="jo">الأردن</option>
//                                     <option value="sy">سوريا</option>
//                                 </select>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <select name="city" className="custom-form-control custom-input-details" id="paymentcities" required>
//                                     <option disabled selected value="">اختر مدينة</option>
//                                 </select>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <input className="form-control custom-form-control custom-input-details" type="text"
//                                     placeholder="رقم الموبايل" name="phone" required/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <input className="form-control custom-form-control custom-input-details" type="text"
//                                     placeholder="العنوان الأول" name="address1" required/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <input className="form-control custom-form-control custom-input-details" type="text"
//                                     placeholder="العنوان الثاني (اختياري)" name="address2"/>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6">
//                         <h3 className="heading">بيانات الدفع</h3>
//                         <div className="row mb-4">
//                             <div className="col-md-6">
//                                 <label className="font-weight-bold">
//                                     <input type="radio" name="payment-method" value="credit_card" checked/>
//                                     البطاقة الإئتمانية
//                                 </label>
//                             </div>
//                             <div className="col-md-6">
//                                 <label className="font-weight-bold">
//                                     <input type="radio" name="payment-method" value="on_delivery"/>
//                                     الدفع عند التسليم
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="row" id="credit_card_info">
//                             <div className="col-md-6 mb-3">
//                                 <input type="text" className="form-control custom-form-control custom-input-details"
//                                 name="credit_card_number" placeholder="رقم البطاقة" required/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <input type="number" className="form-control custom-form-control custom-input-details"
//                                 name="credit_card_expiration_month" placeholder="شهر الانتهاء" min="1" max="12" required/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <input type="number" className="form-control custom-form-control custom-input-details"
//                                 name="credit_card_expiration_year" placeholder="سنة الانتهاء" min="2020" max="2030" required/>
//                             </div>
//                             <div className="col-md-6 mb-3">
//                                 <input type="number" className="form-control custom-form-control custom-input-details"
//                                 name="credit_card_cvv" placeholder="CVV" required/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mt-4">
//                     <h2 className="heading">طلبك</h2>
//                     <table className="custom-table">
//                         <thead>
//                             <tr>
//                                 <th>المنتج</th>
//                                 <th>السعر</th>
//                                 <th>العدد المطلوب</th>
//                                 <th className="hide-on-small">السعر الإجمالي</th>
//                                 <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr data-product-info data-product-price="400">
//                                 <td>
//                                     <div className="custom-media d-flex">
//                                         <img src="./images/adidas_3.png" alt="adidas" className="d-none d-md-block"/>
//                                         <div>
//                                             <h4>تي شيرت رجالي من لاكوست</h4>
//                                             <div className="custom-text-muted">
//                                                 ملابس رجالي
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     400$
//                                 </td>
//                                 <td>
//                                     <select name="product1" className="custom-form-control qunatity" id="product-quantity" data-product-quantity>
//                                         <option value="1">1</option>
//                                         <option value="2">2</option>
//                                         <option value="3" selected>3</option>
//                                     </select>
//                                 </td>
//                                 <td className="total-price-for-product hide-on-small">
//                                     1200$
//                                 </td>
//                                 <td>
//                                     <button className="btn custom-btn-outline-danger" data-remove-from-card>
//                                         <i className="far fa-trash-alt d-md-none d-block"></i>
//                                         <span className="d-none d-md-block">حذف</span>
//                                     </button>
//                                 </td>
//                             </tr>
//                             <tr data-product-info data-product-price="200">
//                                 <td>
//                                     <div className="custom-media d-flex">
//                                         <img src="./images/adidas_1.png" alt="adidas" className="d-none d-md-block"/>
//                                         <div>
//                                             <h4>تي شيرت رجالي من لاكوست</h4>
//                                             <div className="custom-text-muted">
//                                                 ملابس رجالي
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </td>
//                                 <td>
//                                     200$
//                                 </td>
//                                 <td>
//                                     <select name="product1" className="custom-form-control qunatity" data-product-quantity>
//                                         <option value="1">1</option>
//                                         <option value="2" selected>2</option>
//                                         <option value="3">3</option>
//                                     </select>
//                                 </td>
//                                 <td className="total-price-for-product hide-on-small">
//                                     400$
//                                 </td>
//                                 <td>
//                                     <button className="btn custom-btn-outline-danger" data-remove-from-card>
//                                         <i className="far fa-trash-alt d-md-none d-block"></i>
//                                         <span className="d-none d-md-block">حذف</span>
//                                     </button>
//                                 </td>
//                             </tr>
//                         </tbody>
//                         <tfoot>
//                             <tr>
//                                 <td colspan="5" className="total-price custom-text-muted">
//                                     <span>السعر الإجمالي لجميع المنتجات: </span>
//                                     <span id="total-price-for-all-product">1600</span>
//                                     <span>دولار</span>
//                                 </td>
//                             </tr>
//                         </tfoot>
//                     </table>
//                     <button type="submit" className="btn custom-btn-warning custom-btn-with-icon ms-3 mb-4">
//                         <span>
//                             إكمال عملية الشراء
//                             <i className="fas fa-dollar-sign fa-lg"></i>
//                         </span>
//                     </button>
//                 </div>
//             </form>
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

// export default Payment;
