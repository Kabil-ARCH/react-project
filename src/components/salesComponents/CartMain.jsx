import PaySum from "./PaySum" ;
import Notes from "./notes";
import Buttons from "./Buttons"
import CheckOut from"./CheckOut";
import "../../styles/cartmain.css";
import React from "react";

function CartMain() {
	return (
		<div className="cartMain">
			<PaySum />
			<Notes />
			<Buttons />
			<CheckOut />
		</div>
	);
}

export default CartMain;
