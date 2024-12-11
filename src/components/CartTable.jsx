// components/CartTable.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const CartTable = ({
  cartItems,
  updateCartItem,
  removeCartItem,
  totalPrice,
}) => {
  const handleQuantityChange = (item, newQuantity) => {
    const quantity = Math.max(1, parseInt(newQuantity, 10) || 1);
    updateCartItem({ ...item, quantity });
  };

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          {cartItems.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-2 col-sm-4">
                  <img src={item.images[0]} alt={item.title} className="img-fluid rounded-start h-100 object-fit-cover" />
                </div>
                <div className="col-md-10 col-sm-8">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text"><small className="text-muted">{item.category}</small></p>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <p className="card-text fw-bold"> السعر: <span className="text-primary text-lg fs-5">${item.price}</span></p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-4 col-sm-6 mb-2 mb-md-0">
                        <div className="input-group">
                          <label className="input-group-text" htmlFor={`product${item.id}`}>الكمية:</label>
                          <input
                            type="number"
                            id={`product${item.id}`}
                            className="form-control"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item, e.target.value)}
                            min="1"
                            style={{maxWidth: '70px'}}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 mb-2 mb-md-0">
                        <p className="card-text">الإجمالي: ${item.price * item.quantity}</p>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => removeCartItem(item.id)}
                        >
                          <i className="far fa-trash-alt me-1"></i>
                          <span className="d-none d-md-inline">حذف</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 col-lg-12 offset-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ملخص السلة</h5>
              <p className="card-text">السعر الإجمالي لجميع المنتجات: <strong>${totalPrice}</strong></p>
              <button
                type="submit"
                className="btn btn-warning w-100"
              >
                إكمال عملية الشراء
                <i className="fas fa-dollar-sign ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTable;


// // components/CartTable.jsx
// import React from "react";

// const CartTable = ({
// 	cartItems,
// 	updateCartItem,
// 	removeCartItem,
// 	totalPrice,
// }) => {
// 	return (
// 		<form action="/payment" id="form-checkout">
// 			<table className="custom-table">
// 				<thead>
// 					<tr>
// 						<th>المنتج</th>
// 						<th>السعر</th>
// 						<th>العدد المطلوب</th>
// 						<th className="hide-on-small">السعر الإجمالي</th>
// 						<th></th>
// 					</tr>
// 				</thead>
// 				<tbody>
//           {cartItems.map((item) => (
// 						<tr key={item.id} data-product-info data-product-price={item.price}>
//             {/* {console.log(item)} */}
// 							<td>
// 								<div className="custom-media d-flex">
// 									<img
// 										src={item.images[0]}
// 										alt={item.title}
// 										className="d-sm-inline d-md-block"
// 									/>
// 									<div>
// 										<h4>{item.title}</h4>
// 										<div className="custom-text-muted">{item.category}</div>
// 									</div>
// 								</div>
// 							</td>
// 							<td>${item.price}</td>
// 							<td>
// 								<select
// 									name={`product${item.id}`}
// 									className="custom-form-control quantity"
// 									value={item.quantity}
// 									onChange={(e) =>
// 										updateCartItem({
// 											...item,
// 											quantity: parseInt(e.target.value),
// 										})
// 									}
// 									data-product-quantity
// 								>
// 									<option value="1">1</option>
// 									<option value="2">2</option>
// 									<option value="3">3</option>
// 									<option value="4">4</option>
// 									<option value="5">5</option>
// 									<option value="6">6</option>
// 									<option value="7">7</option>
// 									<option value="8">8</option>
// 								</select>
// 							</td>
// 							<td className="total-price-for-product hide-on-small">
// 								${item.price * item.quantity}
// 							</td>
// 							<td>
// 								<button
// 									type="button"
// 									className="btn custom-btn-outline-danger"
// 									onClick={() => removeCartItem(item.id)}
// 									data-remove-from-card
// 								>
// 									<i className="far fa-trash-alt d-md-none d-block"></i>
// 									<span className="d-none d-md-block">حذف</span>
// 								</button>
// 							</td>
// 						</tr>
// 					))}
// 				</tbody>
// 				<tfoot>
// 					<tr>
// 						<td colSpan="5" className="total-price custom-text-muted">
// 							<span>السعر الإجمالي لجميع المنتجات: </span>
// 							<span id="total-price-for-all-product">{totalPrice}</span>
// 							<span>دولار</span>
// 						</td>
// 					</tr>
// 				</tfoot>
// 			</table>
// 			<button
// 				type="submit"
// 				className="btn custom-btn-warning custom-btn-with-icon ms-3 mb-4"
// 			>
// 				<span>
// 					إكمال عملية الشراء
// 					<i className="fas fa-dollar-sign fa-lg"></i>
// 				</span>
// 			</button>
// 		</form>
// 	);
// };

// export default CartTable;
