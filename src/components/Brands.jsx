import React from "react";
import { Link } from "react-router-dom";

const Brands = () => {
	return (
		<div id="row-brands">
			<div className="container">
				<h3 className="heading">الماركات العالمية</h3>
				<div className="row">
					<div className="col-md-6  mb-3">
						<div className="panel">
							<div
								id="carousel-brand-adidas"
								className="carousel slide"
								data-bs-ride="carousel"
							>
								<div className="carousel-inner">
									<div className="carousel-item active">
										<div className="row">
											<div className="col-lg-4 text-center">
												<img
													src="/images/lacoste_2.jpg"
													alt="lacoste"
													className="w-100 mb-2"
													height="145"
												/>
												<Link
													to={`/product`}
													className="btn custom-btn-outline-warning d-none d-lg-block"
												>
													تصفح المنتج
												</Link>
											</div>
											<div className="col-lg-8">
												<div className="clearfix">
													<h4 className="float-start">قميص تك فت بيز</h4>
													<div className="float-end price">35$</div>
												</div>
												<p className="custom-text-muted">
													حقق أقصى أداء أثناء تمارينك الرياضية مع هذا القميص
													الذي يمنحك الراحة ويدعم عضلاتك.
												</p>
												<div className="rating">
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star"></i>
												</div>
												<div className="d-lg-none">
													<a
														href="product.html"
														className="btn w-100 mt-3 custom-btn-outline-warning"
													>
														تصفح المنتج
													</a>
												</div>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="row">
											<div className="col-lg-4 text-center">
												<img
													src="/images/lacoste_2.jpg"
													alt="lacoste"
													className="w-100 mb-2"
													height="145"
												/>
												<a
													href="product.html"
													className="btn custom-btn-outline-warning d-none d-lg-block"
												>
													تصفح المنتج
												</a>
											</div>
											<div className="col-lg-8">
												<div className="clearfix">
													<h4 className="float-start">قميص تك فت بيز</h4>
													<div className="float-end price">35$</div>
												</div>
												<p className="custom-text-muted">
													حقق أقصى أداء أثناء تمارينك الرياضية مع هذا القميص
													الذي يمنحك الراحة ويدعم عضلاتك.
												</p>
												<div className="rating">
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star"></i>
												</div>
												<div className="d-lg-none">
													<a
														href="product.html"
														className="btn w-100 mt-3 custom-btn-outline-warning"
													>
														تصفح المنتج
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="mt-3">
									<div className="clearfix">
										<div className="float-start">
											<div className="d-inline">الماركة</div>
											<img src="/images/adidas_small.png" alt="adidas" />
										</div>
										<div className="float-end">
											<button
												className="btn arrow-btn"
												data-bs-target="#carousel-brand-adidas"
												data-bs-slide="prev"
											>
												<i className="fas fa-chevron-right"></i>
											</button>
											<button
												className="btn arrow-btn"
												data-bs-target="#carousel-brand-adidas"
												data-bs-slide="next"
											>
												<i className="fas fa-chevron-left"></i>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 mb-3">
						<div className="panel">
							<div
								id="carousel-brand-puma"
								className="carousel slide"
								data-bs-ride="carousel"
							>
								<div className="carousel-inner">
									<div className="active carousel-item">
										<div className="row">
											<div className="col-lg-4 text-center">
												{/* <!--صورة المنتج--> */}
												<img
													src="/images/puma_1.jpg"
													alt="حذاء سويدي الرياضي"
													className="w-100 mb-2"
													height="145"
												/>
												<a
													href="product.html"
													className="btn custom-btn-outline-warning d-none d-lg-block"
												>
													تصفح المنتج
												</a>
											</div>
											<div className="col-lg-8 product-details">
												{/* <!--وصف المنتج--> */}
												<div className="clearfix">
													<h4 className="float-start">حذاء سويدي الرياضي</h4>
													<div className="price float-end">75$</div>
												</div>
												<p className="custom-text-muted">
													الحذاء الرياضي العريق الذي استعمله أعظم لاعبي الرياضة
													منذ الستينات.
												</p>
												<div className="rating">
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</div>
											</div>
											<div className="d-lg-none">
												<a
													href="product.html"
													className="btn w-100 mt-3 custom-btn-outline-warning"
												>
													تصفح المنتج
												</a>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="row">
											<div className="col-lg-4 text-center">
												{/* <!--صورة المنتج--> */}
												<img
													src="/images/puma_2.jpg"
													alt="حذاء التنس سماش بَك"
													className="w-100 mb-2"
													height="145"
												/>
												<a
													href="product.html"
													className="btn custom-btn-outline-warning d-none d-lg-block"
												>
													تصفح المنتج
												</a>
											</div>
											<div className="col-lg-8 product-details">
												{/* <!--وصف المنتج--> */}
												<div className="clearfix">
													<div className="float-start">
														<h4>حذاء التنس سماش بَك</h4>
													</div>
													<div className="price float-end">65$</div>
												</div>
												<p className="custom-text-muted">
													حذاء التنس المريح والأنيق من بوما، مناسب لساعات طويلة
													من التمرين.
												</p>
												<div className="rating">
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</div>
											</div>
											<div className="d-lg-none">
												<a
													href="product.html"
													className="btn w-100 mt-3 custom-btn-outline-warning"
												>
													تصفح المنتج
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-3">
								<div className="clearfix">
									<div className="float-start">
										<div className="d-inline">الماركة:</div>
										<img src="/images/puma_small.png" alt="Puma" />
									</div>
									<div className="float-end">
										<button
											className="btn arrow-btn"
											data-bs-target="#carousel-brand-puma"
											data-bs-slide="prev"
										>
											<i className="fas fa-chevron-right"></i>
										</button>
										<button
											className="btn arrow-btn"
											data-bs-target="#carousel-brand-puma"
											data-bs-slide="next"
										>
											<i className="fas fa-chevron-left"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!--نهاية منتجات الشركة--> */}

					{/* <!--منتجات الشركة--> */}
					<div className="col-md-6 mb-3">
						<div className="panel">
							<div
								id="carousel-brand-polo"
								className="carousel slide"
								data-bs-ride="carousel"
							>
								<div className="carousel-inner">
									<div className="active carousel-item">
										<div className="row">
											<div className="col-lg-4 text-center">
												{/* <!--صورة المنتج--> */}
												<img
													src="/images/polo_1.jpg"
													alt="قميص سليم-فت"
													className="w-100 mb-2"
													height="145"
												/>
												<a
													href="product.html"
													className="btn custom-btn-outline-warning d-none d-lg-block"
												>
													تصفح المنتج
												</a>
											</div>
											<div className="col-lg-8 product-details">
												{/* <!--وصف المنتج--> */}
												<div className="clearfix">
													<div className="float-start">
														<h4>قميص سليم-فت</h4>
													</div>
													<div className="price float-end">85$</div>
												</div>
												<p className="custom-text-muted">
													القميص الّذي ظهر في 1972، أصبح متوفرًا بألوان وقياسات
													متنوعة تناسب الجميع.
												</p>
												<div className="rating">
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</div>
											</div>
											<div className="d-lg-none">
												<a
													href="product.html"
													className="btn w-100 mt-3 custom-btn-outline-warning"
												>
													تصفح المنتج
												</a>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="row">
											<div className="col-lg-4 text-center">
												{/* <!--صورة المنتج--> */}
												<img
													src="/images/polo_2.jpg"
													alt="قميص سترتش فت"
													className="w-100 mb-2"
													height="145"
												/>
												<a
													href="product.html"
													className="btn custom-btn-outline-warning d-none d-lg-block"
												>
													تصفح المنتج
												</a>
											</div>
											<div className="col-lg-8 product-details">
												{/* <!--وصف المنتج--> */}
												<div className="clearfix">
													<h4 className="float-start">قميص سترتش فت</h4>
													<div className="price float-end">100$</div>
												</div>
												<p className="custom-text-muted">
													مصنوع من القطن ومزيّن بأزرار من براقة، قميص يمثل
													الراحة ذاتها.
												</p>
												<div className="rating">
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star"></i>
													<i className="fas fa-star"></i>
												</div>
											</div>
											<div className="d-lg-none">
												<a
													href="product.html"
													className="btn w-100 mt-3 custom-btn-outline-warning"
												>
													تصفح المنتج
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-3">
								<div className="clearfix">
									<div className="float-start">
										<div className="d-inline">الماركة:</div>
										<img src="/images/polo_small.png" alt="Polo" />
									</div>
									<div className="float-end">
										<button
											className="btn arrow-btn"
											data-bs-target="#carousel-brand-polo"
											data-bs-slide="prev"
										>
											<i className="fas fa-chevron-right"></i>
										</button>
										<button
											className="btn arrow-btn"
											data-bs-target="#carousel-brand-polo"
											data-bs-slide="next"
										>
											<i className="fas fa-chevron-left"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!--نهاية منتجات الشركة--> */}

					{/* <!--منتجات الشركة--> */}
					<div className="col-md-6 mb-3">
						<div className="panel">
							<div
								id="carousel-brand-hm"
								className="carousel slide"
								data-bs-ride="carousel"
							>
								<div className="carousel-inner">
									<div className="active carousel-item">
										<div className="row">
											<div className="col-lg-4 text-center">
												{/* <!--صورة المنتج--> */}
												<img
													src="/images/hm_2.jpg"
													alt="ثوب بناتي مرقش"
													className="w-100 mb-2"
													height="145"
												/>
												<a
													href="product.html"
													className="btn custom-btn-outline-warning d-none d-lg-block"
												>
													تصفح المنتج
												</a>
											</div>
											<div className="col-lg-8 product-details">
												{/* <!--وصف المنتج--> */}
												<div className="clearfix">
													<h4 className="float-start">ثوب بناتي مرقش</h4>
													<div className="price float-end">20$</div>
												</div>
												<p className="custom-text-muted">
													مصنوع من القطن الطبيعي، يُعطي لطفلتك الراحة أثناء
													اللعب، متوفّر بألوان عديدة.
												</p>
												<div className="rating">
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star"></i>
												</div>
											</div>
											<div className="d-lg-none">
												<a
													href="product.html"
													className="btn w-100 mt-3 custom-btn-outline-warning"
												>
													تصفح المنتج
												</a>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="row">
											<div className="col-lg-4 text-center">
												{/* <!--صورة المنتج--> */}
												<img
													src="/images/hm_3.jpg"
													alt="طقم للصغار"
													className="w-100 mb-2"
													height="145"
												/>
												<a
													href="product.html"
													className="btn custom-btn-outline-warning d-none d-lg-block"
												>
													تصفح المنتج
												</a>
											</div>
											<div className="col-lg-8 product-details">
												{/* <!--وصف المنتج--> */}
												<div className="clearfix">
													<h4 className="float-start">طقم للصغار</h4>
													<div className="price float-end">25$</div>
												</div>
												<p className="custom-text-muted">
													ملائم للأطفال بين 3-5 سنوات، ذو مظهر جذّاب وأنيق
												</p>
												<div className="rating">
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star active"></i>
													<i className="fas fa-star"></i>
												</div>
											</div>
											<div className="d-lg-none">
												<a
													href="product.html"
													className="btn w-100 mt-3 custom-btn-outline-warning"
												>
													تصفح المنتج
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="mt-3">
								<div className="clearfix">
									<div className="float-start">
										<div className="d-inline">الماركة:</div>
										<img src="/images/hm_small.png" alt="H and M" />
									</div>
									<div className="float-end">
										<button
											className="btn arrow-btn"
											data-bs-target="#carousel-brand-hm"
											data-bs-slide="prev"
										>
											<i className="fas fa-chevron-right"></i>
										</button>
										<button
											className="btn arrow-btn"
											data-bs-target="#carousel-brand-hm"
											data-bs-slide="next"
										>
											<i className="fas fa-chevron-left"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Brands;
