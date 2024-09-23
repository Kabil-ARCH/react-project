import React, { useState } from "react";

export const TableContext = React.createContext();

function OrderContext({ children }) {
	const [BtnActive, Activator] = useState("menu");
	const [purchaseCart, cartChanger] = useState([]);
	const[identifier,incrementer] = useState(purchaseCart.length);
	const totalPrice = purchaseCart.reduce(
		(acc, item) => acc + item.amount * item.qty,
		0,
	);
	return (
		<TableContext.Provider
			value={{ identifier,incrementer,purchaseCart, cartChanger, totalPrice, BtnActive, Activator }}
		>
			{children}
		</TableContext.Provider>
	);
}

export default OrderContext;
