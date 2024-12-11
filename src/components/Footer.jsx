import React from "react";

const Footer = () => {
	return (
		<footer className="row">
			<div id="brand-logos" className="text-center">
				<span>المتجر وكيل مُعتمد لكبرى الشركات العالمية</span>
				<div className="img-container">
					<img src="/images/adidas.png" alt="adidas" />
					<img src="/images/lacoste.png" alt="lacoste" />
					<img src="/images/puma.png" alt="puma" />
					<img src="/images/polo.png" alt="polo" />
				</div>
			</div>
			<div id="footer-nav" className="text-center">
				<div className="footer-logo">
					<a href="./">
						<img src="/images/logo_footer.png" alt="logo" />
					</a>
				</div>
				<div className="footer-nav-links d-none d-md-block">
					<a href="./index.html">الصفحة الرئيسية</a>
					<a href="search.html">البحث المتقدم</a>
					<a href="contact.html">تواصل معنا</a>
				</div>
				<div className="newsletter col-md-6 offset-md-3 d-flex align-items-center justify-content-center">
					<form>
						<label for="footer-input">تابع النشرة البريدية لأحدث العروض</label>
						<br />
						<div className="input-group">
							<input
								type="email"
								name="email"
								id="footer-input"
								className="form-control custom-form-control"
								placeholder="البريد الإلكتروني"
							/>
							<button type="submit" className="btn custom-btn-warning">
								متابعة
							</button>
						</div>
					</form>
				</div>
			</div>
			<div id="footer-copyright-social">
				<div className="container">
					<div className="clearfix">
						<div id="copyright" className="float-start"></div>
						<div id="social-icons" className="float-end">
							<a href="https://www.facebook.com">
								<i className="fab fa-facebook-square fa-lg"></i>
							</a>
							<a href="https://www.twitter.com">
								<i className="fab fa-twitter-square fa-lg"></i>
							</a>
							<a href="https://www.instagram.com">
								<i className="fab fa-instagram fa-lg"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
