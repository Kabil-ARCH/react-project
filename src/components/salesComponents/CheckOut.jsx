import React from "react";
import "../../styles/buttons.css";
function CheckOut() {
	return (
		<div className="buttons">
			<button className="button changeBtn1">
				<span className="material-symbols-outlined">print</span>
				<p>Print Bill</p>
			</button>
		  <button className="button changeBtn2"><p>Proceed To Payment</p></button>
		</div>
	);
}

export default CheckOut;
