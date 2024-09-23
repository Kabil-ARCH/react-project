import React from "react";
import "../../styles/summary.css"

function Summary() {
	return (
		<div className="summary">
			<div className="cart_in">
				<h6>Cart Summary</h6>
				<p>Order Id :</p>
			</div>
		  <div className="Holder">
			<button className="someBtn">
				<span className="material-symbols-outlined">school</span>
			</button>
			<button className="someBtn">
				<span className="material-symbols-outlined">interpreter_mode</span>
			</button>
			<button className="someBtn">
				<span className="material-symbols-outlined">more_vert</span>
			</button>
		    </div>
		</div>
	);
}

export default Summary;
