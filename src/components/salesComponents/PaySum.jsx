import React, { useContext } from "react";
import "../../styles/paysum.css";
import { TableContext } from "../context/OrderContext";
function PaySum() {
	const { purchaseCart, totalPrice } = useContext(TableContext);
	const tax = Math.round(totalPrice / 28, 2);
	return (
		<div className="block">
			<div className="header">
				<h4>Payment Summary</h4>
				<p>
					<span className="material-symbols-outlined">receipt_long</span>
					<span>Customer</span>
				</p>
			</div>
			<div className="body">
				<p className="left">Sub Total</p>
				<p className="right">SAR {totalPrice + tax}</p>
			</div>
			<div className="body">
				<p className="left">Taxable Amount</p>
				<p className="right">SAR {totalPrice}</p>
			</div>
			<div className="body">
				<p className="left">Total Tax</p>
				<p className="right">SAR {tax}</p>
			</div>
			<span className="line"></span>
			<div className="body">
				<p className="left">Grand Total</p>
				<p className="total">SAR {totalPrice + tax}</p>
			</div>
		</div>
	);
}

export default PaySum;
