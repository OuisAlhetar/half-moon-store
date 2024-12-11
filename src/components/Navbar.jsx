import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/css/style.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Navbar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isStoreDropdownOpen, setIsStoreDropdownOpen] = useState(false);
	const location = useLocation();

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const toggleStoreDropdown = () => {
		setIsStoreDropdownOpen(!isStoreDropdownOpen);
	};

	const isActive = (path) => location.pathname === path;

	useEffect(() => {
		if (window.bootstrap && window.bootstrap.Tooltip) {
			document
				.querySelectorAll('[data-bs-toggle="tooltip"]')
				.forEach((item) => {
					new window.bootstrap.Tooltip(item);
				});
		} else {
			console.error("Bootstrap Tooltip is not available.");
		}
	}, []);

	return (
		<div className="container-fluid">
			<div className="row">
				<nav className="navbar custom-navbar navbar-expand-lg">
					<div className="container px-0">
						<div className="navbar-header" style={{ marginLeft: "15px" }}>
							<button
								className="navbar-toggler btn btn-icon"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarCollapse"
								aria-controls="navbarCollapse"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<i className="fas fa-bars fa-xl"></i>
							</button>
							<Link
								className="btn-icon btn d-lg-none"
								to="/checkout"
								title="عربة الشراء"
								data-bs-toggle="tooltip"
								data-bs-placement="bottom"
							>
								<i className="fa-solid fa-cart-shopping"></i>
							</Link>

							<Link to="/" className="me-5">
								<img
									src="/images/half-moon-logo.svg"
									alt="متجر عربي"
									width={150}
								/>
							</Link>
						</div>
						<form action="" className="d-flex inline-form">
							{/* <input
								type="search"
								className="form-control custom-form-control"
								placeholder="كلمة البحث ...."
							/> */}
							<div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
								<a
									href="#"
									className="nav-link dropdown-toggle custom-btn categories"
									id="navbarDropdown"
									role="button"
									onClick={toggleDropdown}
									aria-expanded={isDropdownOpen}
								>
									اختر فئة
								</a>
								<ul
									className={`dropdown-menu custom-dropdown-menu ${
										isDropdownOpen ? "show" : ""
									}`}
									aria-labelledby="navbarDropdown"
								>
									<li>
										<div className="checkbox ms-2">
											<label>
												<input
													type="checkbox"
													name="search-category"
													value="men"
												/>
												رجالي
											</label>
										</div>
									</li>
									<li>
										<div className="checkbox ms-2">
											<label>
												<input
													type="checkbox"
													name="search-category"
													value="women"
												/>
												نسائي
											</label>
										</div>
									</li>
									<li>
										<div className="checkbox ms-2">
											<label>
												<input
													type="checkbox"
													name="search-category"
													value="kids"
												/>
												أطفال
											</label>
										</div>
									</li>
								</ul>
							</div>
							<button type="submit" className="btn btn-danger search-btn">
								ابحث
							</button>
						</form>

						<div className="collapse navbar-collapse" id="navbarCollapse">
							<ul className="navbar-nav ms-auto">
								<li className={`nav-item ${isActive("/") ? "active" : ""}`}>
									<Link to="/" className="nav-link" aria-current="page">
										الصفحة الرئيسية
									</Link>
								</li>
								<li
									className={`nav-item dropdown ${
										isStoreDropdownOpen ? "show" : ""
									}`}
								>
									<a
										href="#"
										className="nav-link dropdown-toggle"
										id="navbarDropdown2"
										role="button"
										onClick={toggleStoreDropdown}
										aria-expanded={isStoreDropdownOpen}
									>
										أقسام المتجر
									</a>
									<ul
										className={`dropdown-menu custom-dropdown-menu ${
											isStoreDropdownOpen ? "show" : ""
										}`}
									>
										<li>
											<Link className="dropdown-item" to="/category/men">
												رجالي
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/category/women">
												نسائي
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/category/kids">
												أطفال
											</Link>
										</li>
									</ul>
								</li>
								<li
									className={`nav-item ${isActive("/search") ? "active" : ""}`}
								>
									<Link to="/search" className="nav-link">
										البحث المتقدم
									</Link>
								</li>
								<li
									className={`nav-item ${isActive("/about") ? "active" : ""}`}
								>
									<Link to="/about" className="nav-link">
										تواصل معنا
									</Link>
								</li>
								<li
									className={`nav-item ${isActive("/login") ? "active" : ""}`}
								>
									<Link to="/login">
										<button className="btn btn-outline-primary  ">
											تسجيل الدخول
										</button>
									</Link>
								</li>
								<li
									className={`nav-item ${isActive("/Profile") ? "active" : ""}`}>
													<Link to={`/userprofile/2`}>
							<AccountCircle style={{ fontSize: "40px" }} />
						</Link> 
								</li>
								<li className="mt-2">
									<Link
										className="btn-icon btn d-none d-lg-block"
										to="/checkout"
										title="عربة الشراء"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
									>
										<i className="fa-solid fa-cart-shopping"></i>
									</Link>
								</li>
							</ul>
						</div>
						{/* <Link to="/login">
							<button className="btn btn-outline-primary  ">
								تسجيل الدخول
							</button>
						</Link>
						<Link to={`/userprofile/2`}>
							<AccountCircle style={{ fontSize: "40px" }} />
						</Link> */}
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;

//! ---------------------- old code ----------------------------
// import React, { useState } from "react";
// import "../styles/css/style.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isActiveLink, setIsActiveLink] = useState(false);

// 	const toggleDropdown = () => {
// 		setIsDropdownOpen(!isDropdownOpen);
// 	};

// 	return (
// 		<div className="row">
// 			<nav className="navbar custom-navbar navbar-expand-lg">
// 				<div className="container px-0">
// 					<div className="navbar-header">
// 						<button
// 							className="navbar-toggler btn btn-icon"
// 							type="button"
// 							data-bs-toggle="collapse"
// 							data-bs-target="#navbarCollapse"
// 							aria-controls="navbarCollapse"
// 							aria-expanded="false"
// 							aria-label="Toggle navigation"
// 						>
// 							<i className="fas fa-bars fa-xl"></i>
// 						</button>
// 						<a className="btn-icon btn d-lg-none" >
// 							<i className="fa-solid fa-cart-shopping"></i>
// 						</a>
// 						<Link to={"/"} className="me-5">
// 							<img src="/images/logo.png" alt="متجر عربي" />
// 						</Link>
// 					</div>
// 					<form action="" className="d-flex inline-form">
// 						<input
// 							type="search"
// 							className="form-control custom-form-control"
// 							placeholder="كلمة البحث ...."
// 						/>
// 						<div
// 							className={`dropdown ${isDropdownOpen ? "show" : ""}`}
// 							// dir="ltr"
// 						>
// 							<a
// 								href="#"
// 								className="nav-link dropdown-toggle custom-btn categories"
// 								id="navbarDropdown"
// 								role="button"
// 								onClick={toggleDropdown}
// 								aria-expanded={isDropdownOpen}
// 							>
// 								اختر فئة
// 							</a>
// 							<ul
// 								className={`dropdown-menu custom-dropdown-menu ${
// 									isDropdownOpen ? "show" : ""
// 								}`}
//                 aria-labelledby="navbarDropdown"
// 							>
// 								<li>
// 									<div className="checkbox ms-2">
// 										<label>
// 											<input
// 												type="checkbox"
// 												name="search-category"
// 												value="men"
// 											/>
// 											رجالي
// 										</label>
// 									</div>
// 								</li>
// 								<li>
// 									<div className="checkbox ms-2">
// 										<label>
// 											<input
// 												type="checkbox"
// 												name="search-category"
// 												value="women"
// 											/>
// 											نسائي
// 										</label>
// 									</div>
// 								</li>
// 								<li>
// 									<div className="checkbox ms-2">
// 										<label>
// 											<input
// 												type="checkbox"
// 												name="search-category"
// 												value="kids"
// 											/>
// 											أطفال
// 										</label>
// 									</div>
// 								</li>
// 							</ul>
// 						</div>
// 						<button type="submit" className="btn search-btn">
// 							ابحث
// 						</button>
// 					</form>
// 					<div className="collapse navbar-collapse" id="navbarCollapse">
// 						<ul className="navbar-nav ms-auto">
// 							<li className="nav-item active">
// 								<Link to={`/`} className="nav-link" aria-current="page">
// 									الصفحة الرئيسية
// 								</Link>
// 							</li>
// 							<li className="nav-item dropdown">
// 								<a
// 									href="#"
// 									className="nav-link dropdown-toggle"
// 									id="navbarDropdown2"
// 									role="button"
// 									data-bs-toggle="dropdown"
// 									aria-expanded="false"
// 								>
// 									أقسام المتجر
// 								</a>
// 								<ul className="dropdown-menu custom-dropdown-menu">
// 									<li>
// 										<a className="dropdown-item" href="#">
// 											رجالي
// 										</a>
// 									</li>
// 									<li>
// 										<a className="dropdown-item" href="#">
// 											نسائي
// 										</a>
// 									</li>
// 									<li>
// 										<a className="dropdown-item" href="#">
// 											أطفال
// 										</a>
// 									</li>
// 								</ul>
// 							</li>
// 							<li className="nav-item">
// 								<Link to={"/search"} className="nav-link">
// 									البحث المتقدم
// 								</Link>
// 							</li>
// 							<li className="nav-item">
// 								<Link to={`/about`} className="nav-link">
// 									تواصل معنا
// 								</Link>
// 							</li>
// 							<li className="mt-2">
// 								<Link
// 									className="btn-icon btn d-none d-lg-block"
// 									id="btn-shopping-cart"
// 									to={"/checkout"}
// 									title="عربة الشراء"
// 									data-bs-toggle="tooltip"
// 									data-bs-placement="bottom"
// 								>
// 									<i className="fa-solid fa-cart-shopping"></i>
// 								</Link>
// 							</li>
// 						</ul>
// 					</div>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// };

// export default Navbar;
