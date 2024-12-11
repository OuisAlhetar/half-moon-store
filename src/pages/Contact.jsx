import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
	return (
		<div className="container-fluid">
			{/* <!--الشريط العلوي--> */}
			<Navbar />
			{/* <!--نهاية الشريط العلوي--> */}

			{/* <!--الخريطة--> */}
			<div className="row">
				<div id="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1828591189865!2d55.274284085515625!3d25.197055137890786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434409a6abc5%3A0x33acfe7a9a726c38!2z2KjYsdisINiu2YTZitmB2Kkg2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1593965284754!5m2!1sar!2s"
						width="100%"
						height="250"
						frameBorder="0"
						style={{ border: 0 }}
						allowFullScreen=""
						aria-hidden="false"
						tabIndex="0"
					></iframe>
				</div>
			</div>

			<div className="container">
				{/* <!--عناصر التّنقّل الفرعيّة--> */}
				<div
					className="row"
					aria-label="breadcrumb"
					style={{ "--bs-breadcrumb-divider": "'>'" }}
				>
					<ol className="breadcrumb custom-breadcrumb">
						<li className="breadcrumb-item">
							<a href=".">الصفحة الرئيسية</a>
						</li>
						<li className="breadcrumb-item active">تواصل معنا</li>
					</ol>
				</div>
				{/* <!--نهاية عناصر التّنقّل الفرعيّة--> */}

				<div id="contact-options" className="row mb-4">
					{/* <!--معلومات التواصل--> */}
					<div className="col-lg-3 offset-lg-2">
						<h4 className="heading-with-border-bottom ">معلومات التواصل</h4>
						<div id="contact-info" className="mb-4">
							<div>
								<i className="fas fa-phone fa-lg"></i>
								974.4422.7813
							</div>
							<div>
								<i className="fas fa-envelope fa-lg"></i>
								info@araby.com
							</div>
							<div>
								<i className="fas fa-map-marker-alt fa-lg"></i>
								العنوان: الإمارات العربية المتحدة، دبي، برج خليفة
							</div>
						</div>

						{/* <!--قسم الاشتراك بالنّشرة البريدية--> */}
						<h4 className="heading-with-border-bottom">
							اشترك بالنشرة البريدية
						</h4>
						<form id="form-subscription">
							<div className="input-group">
								<input
									type="email"
									className="form-control custom-form-control"
									placeholder="البريد الإلكتروني"
									name="email"
									required
								/>
								<button className="btn custom-btn-warning" type="submit">
									متابعة
								</button>
							</div>
						</form>
					</div>
					{/* <!--نهاية معلومات التواصل--> */}

					{/* <!--قسم اترك رسالة--> */}
					<div className="col-lg-6">
						<h4 className="pb-2">اترك رسالة</h4>
						<form>
							<div className="row">
								<div className="col-md-6">
									<input
										className="form-control custom-input-details custom-form-control"
										name="name"
										type="text"
										placeholder="الاسم"
										required
									/>
								</div>
								<div className="col-md-6">
									<input
										className="form-control custom-input-details custom-form-control"
										name="email"
										type="email"
										placeholder="البريد الإلكتروني"
										required
									/>
								</div>
							</div>
							<div className="mt-3">
								<textarea
									className="form-control custom-input-details custom-form-control"
									name="message"
									placeholder="نص الرسالة"
									required
								></textarea>
							</div>
							<div className="d-flex justify-content-end">
								<button
									type="submit"
									className="btn custom-btn-warning custom-btn-with-icon"
								>
									<span>
										إرسال الرسالة
										<i className="far fa-paper-plane"></i>
									</span>
								</button>
							</div>
						</form>
					</div>
					{/* <!--نهاية قسم اترك رسالة--> */}
				</div>
			</div>
			{/* <!--تذييل الصفحة--> */}
			<Footer/>
		</div>
	);
};

export default Contact;

// import React from "react";
// import Navbar from "../components/Navbar";

// const Contact = () => {
// 	return (
// 		<div className="container-fluid">
// 			{/* <!--الشريط العلوي--> */}
// 			<Navbar />
//       {/* <!--نهاية الشريط العلوي--> */}

// 			{/* <!--الخريطة--> */}
// 			<div className="row">
// 				<div id="map">
// 					<iframe
// 						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1828591189865!2d55.274284085515625!3d25.197055137890786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434409a6abc5%3A0x33acfe7a9a726c38!2z2KjYsdisINiu2YTZitmB2Kkg2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2s!4v1593965284754!5m2!1sar!2s"
// 						width="100%"
// 						height="250"
// 						frameborder="0"
// 						style="border:0;"
// 						allowfullscreen=""
// 						aria-hidden="false"
// 						tabindex="0"
// 					></iframe>
// 				</div>
// 			</div>

// 			<div className="container">
// 				{/* <!--عناصر التّنقّل الفرعيّة--> */}
// 				<div
// 					className="row"
// 					area-label="breadcrumb"
// 					style="--bs-breadcrumb-divider: '>';"
// 				>
// 					<ol className="breadcrumb custom-breadcrumb">
// 						<li className="breadcrumb-item">
// 							<a href=".">الصفحة الرئيسية</a>
// 						</li>
// 						<li className="breadcrumb-item active">تواصل معنا</li>
// 					</ol>
// 				</div>
// 				{/* <!--نهاية عناصر التّنقّل الفرعيّة--> */}

// 				<div id="contact-options" className="row mb-4">
// 					{/* <!--معلومات التواصل--> */}
// 					<div className="col-lg-3 offset-lg-2">
// 						<h4 className="heading-with-border-bottom ">معلومات التواصل</h4>
// 						<div id="contact-info" className="mb-4">
// 							<div>
// 								<i className="fas fa-phone fa-lg"></i>
// 								974.4422.7813
// 							</div>
// 							<div>
// 								<i className="fas fa-envelope fa-lg"></i>
// 								info@araby.com
// 							</div>
// 							<div>
// 								<i className="fas fa-map-marker-alt fa-lg"></i>
// 								العنوان: الإمارات العربية المتحدة، دبي، برج خليفة
// 							</div>
// 						</div>

// 						{/* <!--قسم الاشتراك بالنّشرة البريدية--> */}
// 						<h4 className="heading-with-border-bottom">اشترك بالنشرة البريدية</h4>
// 						<form id="form-subscription">
// 							<div className="input-group">
// 								<input
// 									type="email"
// 									className="form-control custom-form-control"
// 									placeholder="البريد الإلكتروني"
// 									name="email"
// 									required
// 								/>
// 								<button className="btn custom-btn-warning" type="submit">
// 									متابعة
// 								</button>
// 							</div>
// 						</form>
// 					</div>
// 					{/* <!--نهاية معلومات التواصل--> */}

// 					{/* <!--قسم اترك رسالة--> */}
// 					<div className="col-lg-6">
// 						<h4 className="pb-2">اترك رسالة</h4>
// 						<form>
// 							<div className="row">
// 								<div className="col-md-6">
// 									<input
// 										className="form-control custom-input-details custom-form-control"
// 										name="name"
// 										type="text"
// 										placeholder="الاسم"
// 										required
// 									/>
// 								</div>
// 								<div className="col-md-6">
// 									<input
// 										className="form-control custom-input-details custom-form-control"
// 										name="email"
// 										type="email"
// 										placeholder="البريد الإلكتروني"
// 										required
// 									/>
// 								</div>
// 							</div>
// 							<div className="mt-3">
// 								<textarea
// 									className="form-control custom-input-details custom-form-control"
// 									name="message"
// 									placeholder="نص الرسالة"
// 									required
// 								></textarea>
// 							</div>
// 							<div className="d-flex justify-content-end">
// 								<button
// 									type="submit"
// 									className="btn custom-btn-warning custom-btn-with-icon"
// 								>
// 									<span>
// 										إرسال الرسالة
// 										<i className="far fa-paper-plane"></i>
// 									</span>
// 								</button>
// 							</div>
// 						</form>
// 					</div>
// 					{/* <!--نهاية قسم اترك رسالة--> */}
// 				</div>
// 			</div>
// 			{/* <!--تذييل الصفحة--> */}
// 			<footer className="row">
// 				<div id="brand-logos" className="text-center">
// 					<span>المتجر وكيل مُعتمد لكبرى الشركات العالمية</span>
// 					<div className="img-container">
// 						<img src="./images/lacoste.png" alt="Lacoste" />
// 						<img src="./images/adidas.png" alt="Adidas" />
// 						<img src="./images/puma.png" alt="Puma" />
// 						<img src="./images/polo.png" alt="Polo" />
// 					</div>
// 				</div>

// 				<div id="footer-nav" className="text-center">
// 					<div className="footer-logo">
// 						<a href="./">
// 							<img src="./images/logo_footer.png" alt="عربي" />
// 						</a>
// 					</div>
// 					<div className="footer-nav-links d-none d-md-block my-5">
// 						<a href=".">الصفحة الرئيسية</a>
// 						<a href="search.html">البحث المتقدّم</a>
// 						<a href="contact.html">تواصل معنا</a>
// 					</div>
// 					<div className="newsletter d-flex align-items-center justify-content-center col-md-6 offset-md-3">
// 						<form>
// 							<label for="footer-email">
// 								تابع النشرة البريديّة لأحدث العروض
// 							</label>
// 							<br />
// 							<div className="input-group">
// 								<input
// 									id="footer-email"
// 									className="form-control custom-form-control"
// 									type="email"
// 									placeholder="البريد الإلكتروني"
// 									name="email"
// 									required
// 								/>
// 								<button type="submit" className="btn custom-btn-warning">
// 									متابعة
// 								</button>
// 							</div>
// 						</form>
// 					</div>
// 				</div>

// 				<div id="footer-copyright-social">
// 					<div className="container">
// 						<div className="clearfix">
// 							<div id="copyright" className="float-start"></div>
// 							<div id="social-icons" className="float-end">
// 								<a href="https://www.facebook.com">
// 									<i className="fab fa-facebook-square fa-lg"></i>
// 								</a>
// 								<a href="https://www.twitter.com">
// 									<i className="fab fa-twitter-square fa-lg"></i>
// 								</a>
// 								<a href="https://www.instagram.com">
// 									<i className="fab fa-instagram fa-lg"></i>
// 								</a>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</footer>
// 			{/* <!--نهاية تذييل الصفحة--> */}
// 		</div>
// 	);
// };

// export default Contact;
