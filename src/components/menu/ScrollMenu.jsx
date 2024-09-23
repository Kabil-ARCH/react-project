import React, { useState } from "react";
import "../../styles/Scrollmenu.css";
function ScrollMenu() {
	const [currAct, ActChange] = useState("btn1");
	return (
		<div className="Box">
			<button
				className={` ${currAct === "btn1" ? "activated" : "btn"}`}
				onClick={() => {
					ActChange("btn1");
				}}
			>
				<span>All</span>
			</button>
			<button
				className={` ${currAct === "btn2" ? "activated" : "btn"}`}
				onClick={() => {
					ActChange("btn2");
				}}
			>
				<span className="material-symbols-outlined">star</span>
				<span>Favourite</span>
			</button>
			<button
				className={` ${currAct === "btn3" ? "activated" : "btn"}`}
				onClick={() => {
					ActChange("btn3");
				}}
			>
				<span>Burger</span>
			</button>
			<button
				className={`${currAct === "btn4" ? "activated" : "btn"}`}
				onClick={() => {
					ActChange("btn4");
				}}
			>
				<span>Parota</span>
			</button>
			<button
				className={`${currAct === "btn5" ? "activated" : "btn"}`}
				onClick={() => {
					ActChange("btn5");
				}}
			>
				<span>Juice</span>
			</button>
			<button
				className={`${currAct === "btn6" ? "activated" : "btn"}`}
				onClick={() => {
					ActChange("btn6");
				}}
			>
				<span>Sandwich</span>
			</button>
		</div>
	);
}

export default ScrollMenu;
