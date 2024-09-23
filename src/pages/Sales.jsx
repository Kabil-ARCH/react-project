import React, { useContext } from "react";
import "../styles/sales.css";
import SearchBar from "../components/salesComponents/SearchBar";
import Summary from "../components/salesComponents/Summary";
import TableContent from "../components/salesComponents/TableContent";
import CartMain from "../components/salesComponents/CartMain";
import { TableContext } from "../components/context/OrderContext";
import Wrapper from "../components/menu/wrapper";
function Sales() {
	const { BtnActive } = useContext(TableContext);
	const RetComp = () => {
		switch (BtnActive) {
			case "menu":
				return <Wrapper />;
			case "cart":
				return <CartMain />;
			default:
				return null;
		}
	};
	return (
		<div className="salesContainer">
			<div className="cart">
				<SearchBar />
				<Summary />
				<TableContent />
			</div>
			<div className="catalouge">{RetComp()}</div>
		</div>
	);
}

export default Sales;
