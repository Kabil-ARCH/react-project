import React, { useState } from "react";
import "../../styles/warpper.css";
import Catmenu from "./Catmenu";
import ScrollMenu from "./ScrollMenu";
import MenuWrapper from "./MenuWrapper";
import FoodMeenu from "./FoodMeenu";
import CheckOut from "../salesComponents/CheckOut";

export const Idprovider = React.createContext();
function Wrapper() {
	const [Id, SetId] = useState(0);
	const [Open, Opener] = useState(false);
	return (
		<div className="cartmain">
			{Open === false ? (
				<Idprovider.Provider value={{ Id, SetId, Open, Opener }}>
					<Catmenu />
					<ScrollMenu />
					<MenuWrapper />
					<CheckOut />
				</Idprovider.Provider>
			) : (
				<Idprovider.Provider value={{ Id, Opener }}>
					<FoodMeenu />
				</Idprovider.Provider>
			)}
		</div>
	);
}

export default Wrapper;
