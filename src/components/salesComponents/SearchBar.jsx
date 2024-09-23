import  { useContext, useState } from "react";
import "../../styles/SearchBar.css";
import { TableContext } from "../context/OrderContext";
function SearchBar() {
	const { BtnActive, Activator } = useContext(TableContext);
	const [searchVal, SearchChanger] = useState("");
	const [bg, bgChange] = useState(true);
	const InpChanger = (event) => {
		SearchChanger(event.target.value);
	};

	const open = () => {
		Activator(() => (BtnActive === "cart" ? "menu" : "cart"));
		bgChange(!bg);
	};
	return (
		<div className="inpParent">
			<input
				value={searchVal}
				onChange={InpChanger}
				placeholder="     Search"
				className="inpBar"
			></input>
			<button className={`inpBtn ${bg ? "menu" : ""}`} onClick={() => open()}>
				<span className="material-symbols-outlined">menu_book</span>
			</button>
		</div>
	);
}

export default SearchBar;
