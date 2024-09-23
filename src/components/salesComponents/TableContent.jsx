import React, { useContext, useState } from "react";
import "../../styles/Table.css";
import NoCart from "./NoCart";
import { TableContext } from "../context/OrderContext";
function TableContent() {
	const { purchaseCart, cartChanger } = useContext(TableContext);

	const increase = (id) => {
		cartChanger((prevState) =>
			prevState.map((item) =>
				id === item.id ? { ...item, qty: item.qty + 1 } : item,
			),
		);
	};
	const decrease = (id) => {
		cartChanger((prevState) =>
			prevState
				.map((item) =>
					id === item.id && item.qty > 0
						? { ...item, qty: item.qty - 1 }
						: item,
				)
				.filter((item) => item.qty > 0),
		);
	};

	const deleter = (id) => {
		cartChanger((prevState) => prevState.filter((item) => item.id !== id));
	};

	return (
		<div className="Table">
			<table className="real_tab">
				<thead className="head">
					<tr>
						<th className="item title">Item</th>
						<th className="Quantity title">Qty</th>
						<th className="amount title">
							<h6>Amount(SAR)</h6>
						</th>
					</tr>
				</thead>
				{purchaseCart.length === 0 ? (
					<NoCart />
				) : (
					<tbody>
						{purchaseCart.map((item) => {
							return (
								<tr key={item.id} className="tableRow">
									<td className="item_1">{item.name}</td>
									<td className="Quantity">
										<div className="inQty">
											<button onClick={() => decrease(item.id)}>-</button>
											{item.qty}
											<button onClick={() => increase(item.id)}>+</button>
										</div>
									</td>
									<td className="amount">
										<div className="amtDes">
											<p>{item.amount * item.qty}</p>
											<button onClick={() => deleter(item.id)}>
												<span className="material-symbols-outlined">
													delete
												</span>
											</button>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				)}
			</table>
		</div>
	);
}
export default TableContent;
