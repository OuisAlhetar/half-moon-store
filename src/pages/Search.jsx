import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/css/style.css'
import '../styles/sass/style.scss'

const Search = () => {
  return (
    <div className="conatiner-fluid">
        {/* <!-- القائمة العلوية -->  */}
        <Navbar/>
        {/* <!-- نهاية القائمة العلوية --> */}

        <div className="container">
            {/* <!-- القائمة الفرعية --> */}
            <div className="container">
          <div className="row" aria-label="breadcrumb"
            style={{"--bs-breadcrumb-divider": "'>'"}}>
                    <ol className="breadcrumb custom-breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="./index.html">الصفحة الرئيسية</a>
                        </li>
                        <li className="breadcrumb-item active">
                            صفحة البحث المتقدم
                        </li>
                    </ol>
                </div>
            </div>
            {/* <!-- نهاية القائمة الفرعية --> */}

            <div className="row">
                <form id="form-advanced-search" className="col-lg-3">
                    <div className="row">
                        <div className="col-lg-12 col-md-4 offset-lg-0 offset-md-2 col-6">
                            <div id="search-by-category" className="card panel">
                                <div className="card-header">
                                    تصفية بالفئة
                                </div>
                                <div className="list-group custom-list-group">
                                    <div className="list-group-item">
                                        <input type="checkbox" name="category-tshirt" id="category-tshirt" checked/>
                                        <label for="category-tshirt">تي شيرت</label>
                                        <small className="custom-text-muted font-weight-bold">(200)</small>
                                    </div>
                                    {/* <!--فئة--> */}
                                    <div className="list-group-item">
                                        <input type="checkbox" id="category_pants" name="category_pants"/>
                                        <label for="category_pants">بناطيل</label>
                                        <small className="custom-text-muted font-weight-bold">(260)</small>
                                    </div>
                                    {/* <!--نهاية فئة--> */}
        
                                    {/* <!--فئة--> */}
                                    <div className="list-group-item">
                                        <input type="checkbox" id="category_shoes" name="category_shoes" checked/>
                                        <label for="category_shoes">أحذية</label>
                                        <small className="custom-text-muted font-weight-bold">(150)</small>
                                    </div>
                                    {/* <!--نهاية فئة--> */}
        
                                    {/* <!--فئة--> */}
                                    <div className="list-group-item">
                                        <input type="checkbox" id="category_jacket" name="category_jacket" checked/>
                                        <label for="category_jacket">جاكت</label>
                                        <small className="custom-text-muted font-weight-bold">(367)</small>
                                    </div>
                                    {/* <!--نهاية فئة--> */}
        
                                    {/* <!--فئة--> */}
                                    <div className="list-group-item">
                                        <input type="checkbox" id="category_blouse" name="category_blouse"/>
                                        <label for="category_blouse">بلوز</label>
                                        <small className="custom-text-muted font-weight-bold">(54)</small>
                                    </div>
                                    {/* <!--نهاية فئة--> */}
        
                                    {/* <!--فئة--> */}
                                    <div className="list-group-item">
                                        <input type="checkbox" id="category_bags" name="category_bags"/>
                                        <label for="category_bags">حقائب</label>
                                        <small className="custom-text-muted font-weight-bold">(25)</small>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-12 col-md-4 col-6">
                            <div className="card panel">
                                <div className="card-header">تصفية بالماركة</div>
                                <div className="list-group custom-list-group">
                                    <div className="list-group-item">
                                        <input type="checkbox" name="brand-adidas" id="brand-adidas"/>
                                        <label for="brand-adidas">Adidas</label>
                                    </div>
        
                                    {/* <!--ماركة--> */}
                                    <div className="list-group-item">
                                        <input type="checkbox" name="brand_lacoste" checked/>
                                        <label for="brand_lacoste" className="font-weight-bold">
                                        Lacoste
                                        </label>
                                    </div>
                                    {/* <!--نهاية ماركة--> */}
        
                                    {/* <!--ماركة--> */}
                                    <div className="list-group-item">
                                        <input type="checkbox" name="brand_polo" checked/>
                                        <label for="brand_polo" className="font-weight-bold">
                                        Polo
                                        </label>
                                    </div>
                                    {/* <!--نهاية ماركة--> */}
        
                                    {/* <!--ماركة--> */}
                                    <div className="list-group-item">
                                        <input type="checkbox" name="brand_puma"/>
                                        <label for="brand_puma" className="font-weight-bold">
                                        Puma
                                        </label>
                                    </div>
                                    {/* <!--نهاية ماركة--> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn custom-btn-warning w-100 my-3" type="submit">تصفية البحث</button>
                    </div>
                </form>
                <div className="col-lg-9" id="search-results">
                    <h3 className="heading heading-with-border-bottom">نتائج البحث</h3>
                    <div className="row">
                        {/* <!--منتج--> */}
                        <div className="col-md-4">
                          <div className="card custom-thumbnail" data-product>
                            <div className="overlay">
                              <button className="btn add-to-cart-btn" data-add-to-cart>
                                إضافة للعربة
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </div>
                            <img src="images/most_sold_2.jpg" alt="فلورا تي شيرت"/>
                            <div className="card-body p-2">
                              <div className="clearfix">
                                <h4 className="float-start">فلورا تي شيرت</h4>
                                <div className="price float-end pt-2">
                                  200$
                                </div>
                              </div>
                              <div>
                                <div className="rating">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <button className="btn  add-to-cart-btn d-block d-lg-none mx-auto" data-add-to-cart>
                                  إضافة للعربة
                                  <i className="fas fa-cart-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--نهاية منتج--> */}
            
                        {/* <!--منتج--> */}
                        <div className="col-md-4">
                          <div className="card custom-thumbnail" data-product>
                            <div className="overlay">
                              <button className="btn  add-to-cart-btn" data-add-to-cart>
                                إضافة للعربة
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </div>
                            <img src="images/most_sold_1.jpg" alt="شير بلوز من نافي"/>
                            <div className="card-body p-2">
                              <div className="clearfix">
                                <h4 className="float-start">شير بلوز من نافي</h4>
                                <div className="price float-end pt-2">
                                  500$
                                </div>
                              </div>
                              <div>
                                <div className="rating">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <button className="btn  add-to-cart-btn d-block d-lg-none mx-auto" data-add-to-cart>
                                  إضافة للعربة
                                  <i className="fas fa-cart-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--نهاية منتج--> */}
            
                        {/* <!--منتج--> */}
                        <div className="col-md-4">
                          <div className="card custom-thumbnail" data-product>
                            <div className="sale">50%</div>
                            <div className="overlay">
                              <button className="btn  add-to-cart-btn" data-add-to-cart>
                                إضافة للعربة
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </div>
                            <img src="images/most_sold_3.jpg" alt="جاكت أولادي"/>
                            <div className="card-body p-2">
                              <div className="clearfix">
                                <h4 className="float-start">جاكت أولادي</h4>
                                <div className="price float-end pt-2">
                                  450$
                                </div>
                              </div>
                              <div>
                                <div className="rating">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <button className="btn  add-to-cart-btn d-block d-lg-none mx-auto" data-add-to-cart>
                                  إضافة للعربة
                                  <i className="fas fa-cart-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--نهاية منتج--> */}
            
                        {/* <!--منتج--> */}
                        <div className="col-md-4">
                          <div className="card custom-thumbnail" data-product>
                            <div className="overlay">
                              <button className="btn  add-to-cart-btn" data-add-to-cart>
                                إضافة للعربة
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </div>
                            <img src="images/hm_3.jpg" alt="طقم للصغار"/>
                            <div className="card-body p-2">
                              <div className="clearfix">
                                <h4 className="float-start">طقم للصغار</h4>
                                <div className="price float-end pt-2">
                                  25$
                                </div>
                              </div>
                              <div>
                                <div className="rating">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                </div>
                                <button className="btn  add-to-cart-btn d-block d-lg-none mx-auto" data-add-to-cart>
                                  إضافة للعربة
                                  <i className="fas fa-cart-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--نهاية منتج--> */}
            
                        {/* <!--منتج--> */}
                        <div className="col-md-4">
                          <div className="card custom-thumbnail" data-product>
                            <div className="overlay">
                              <button className="btn  add-to-cart-btn" data-add-to-cart>
                                إضافة للعربة
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </div>
                            <img src="images/adidas_4.jpg" alt="تيشيرت ألتيميت"/>
                            <div className="card-body p-2">
                              <div className="clearfix">
                                <h4 className="float-start">تيشيرت ألتيميت</h4>
                                <div className="price float-end pt-2">
                                  200$
                                </div>
                              </div>
                              <div>
                                <div className="rating">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <button className="btn  add-to-cart-btn d-block d-lg-none mx-auto" data-add-to-cart>
                                  إضافة للعربة
                                  <i className="fas fa-cart-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--نهاية منتج--> */}
            
                        {/* <!--منتج--> */}
                        <div className="col-md-4">
                          <div className="card custom-thumbnail" data-product>
                            <div className="overlay">
                              <button className="btn  add-to-cart-btn" data-add-to-cart>
                                إضافة للعربة
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </div>
                            <img src="images/lacoste_1.jpg" alt="تي شيرت رجالي"/>
                            <div className="card-body p-2">
                              <div className="clearfix">
                                <h4 className="float-start">تي شيرت رجالي</h4>
                                <div className="price float-end pt-2">
                                  50$
                                </div>
                              </div>
                              <div>
                                <div className="rating">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <button className="btn  add-to-cart-btn d-block d-lg-none mx-auto" data-add-to-cart>
                                  إضافة للعربة
                                  <i className="fas fa-cart-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--نهاية منتج--> */}
            
                        {/* <!--منتج--> */}
                        <div className="col-md-4">
                          <div className="card custom-thumbnail" data-product>
                            <div className="overlay">
                              <button className="btn  add-to-cart-btn" data-add-to-cart>
                                إضافة للعربة
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </div>
                            <img src="images/hm_2.jpg" alt="ثوب بناتي مرقش"/>
                            <div className="card-body p-2">
                              <div className="clearfix">
                                <h4 className="float-start">ثوب بناتي مرقش</h4>
                                <div className="price float-end pt-2">
                                  20$
                                </div>
                              </div>
                              <div>
                                <div className="rating">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <button className="btn  add-to-cart-btn d-block d-lg-none mx-auto" data-add-to-cart>
                                  إضافة للعربة
                                  <i className="fas fa-cart-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--نهاية منتج--> */}
            
                        {/* <!--منتج--> */}
                        <div className="col-md-4">
                          <div className="card custom-thumbnail" data-product>
                            <div className="sale">50%</div>
                            <div className="overlay">
                              <button className="btn  add-to-cart-btn" data-add-to-cart>
                                إضافة للعربة
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </div>
                            <img src="images/puma_1.jpg" alt="حذاء سويدي الرياضي"/>
                            <div className="card-body p-2">
                              <div className="clearfix">
                                <h4 className="float-start">حذاء سويدي الرياضي</h4>
                                <div className="price float-end pt-2">
                                  75$
                                </div>
                              </div>
                              <div>
                                <div className="rating">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <button className="btn  add-to-cart-btn d-block d-lg-none mx-auto" data-add-to-cart>
                                  إضافة للعربة
                                  <i className="fas fa-cart-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--نهاية منتج--> */}
            
                        {/* <!--منتج--> */}
                        <div className="col-md-4">
                          <div className="card custom-thumbnail" data-product>
                            <div className="overlay">
                              <button className="btn  add-to-cart-btn" data-add-to-cart>
                                إضافة للعربة
                                <i className="fas fa-cart-plus"></i>
                              </button>
                            </div>
                            <img src="images/polo_2.jpg" alt="قميص سترتش فت"/>
                            <div className="card-body p-2">
                              <div className="clearfix">
                                <h4 className="float-start">قميص سترتش فت</h4>
                                <div className="price float-end pt-2">
                                  100$
                                </div>
                              </div>
                              <div>
                                <div className="rating">
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star active"></i>
                                  <i className="fas fa-star"></i>
                                </div>
                                <button className="btn  add-to-cart-btn d-block d-lg-none mx-auto" data-add-to-cart>
                                  إضافة للعربة
                                  <i className="fas fa-cart-plus"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!--نهاية منتج--> */}
            
                      </div>
                      <div className="col-lg-9 offset-lg-3">
                        <nav aria-label="Page navigation example" className="search-pagination">
                            <ul className="pagination custom-pagination">
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Previous">
                                  <span aria-hidden="true">&laquo;</span>
                                </a>
                              </li>
                              <li className="page-item active"><a className="page-link" href="#">1</a></li>
                              <li className="page-item"><a className="page-link" href="#">2</a></li>
                              <li className="page-item"><a className="page-link" href="#">3</a></li>
                              <li className="page-item"><a className="page-link" href="#">4</a></li>
                              <li className="page-item"><a className="page-link" href="#">5</a></li>
                              <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                  <span aria-hidden="true">&raquo;</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                      </div>
                </div>
            </div>
        </div>

        <footer className="row">
            <div id="brand-logos" className="text-center">
                <span>المتجر وكيل مُعتمد لكبرى الشركات العالمية</span>
                <div className="img-container">
                    <img src="./images/adidas.png" alt="adidas"/>
                    <img src="./images/lacoste.png" alt="lacoste"/>
                    <img src="./images/puma.png" alt="puma"/>
                    <img src="./images/polo.png" alt="polo"/>
                </div>
            </div>
            <div id="footer-nav" className="text-center">
                <div className="footer-logo">
                    <a href="./">
                        <img src="./images/logo_footer.png" alt="logo"/>
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
                        <br/>
                        <div className="input-group">
                            <input type="email" name="email" id="footer-input" className="form-control custom-form-control" placeholder="البريد الإلكتروني"/>
                            <button type="submit" className="btn custom-btn-warning">متابعة</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="footer-copyright-social">
                <div className="container">
                    <div className="clearfix">
                        <div id="copyright" className="float-start">
                            
                        </div>
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
    </div>
  )
}

export default Search