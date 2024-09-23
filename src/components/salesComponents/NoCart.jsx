import React from "react";
import cart from "../../assets/cart.png";
import "../../styles/NoCart.css"

function NoCart() {
	return (
		<div className="NoCart">
			<img src={cart}/>
			<h5>Cart is Empty</h5>
			<p>Scan bar code or add Items to cart </p>
		</div>
	);
}

export default NoCart;
