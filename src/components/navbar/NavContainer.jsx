import React from "react";
import { Link } from "react-router-dom";
import "../../styles/style_NavContainer.css";
import { useState } from "react";

function NavContainer() {
	const [color, colorChanger] = useState("sales");
	return (
		<div className="nav">
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
			/>

			<div
				className={`child ${color === "sales" ? "active" : ""}`}
				onClick={() => {
					colorChanger("sales");
				}}
			>
				<Link to="/">
					<span className="material-symbols-outlined">shopping_cart</span>
					Sales
				</Link>
			</div>

			<div
				className={`child ${color === "dash" ? "active" : ""}`}
				onClick={() => {
					colorChanger("dash");
				}}
			>
				<Link to="dashboard">
					<span className="material-symbols-outlined">dashboard</span>
					<span>Dashboard</span>
				</Link>
			</div>

			<div
				className={`child ${color === "cust" ? "active" : ""}`}
				onClick={() => {
					colorChanger("cust");
				}}
			>
				<Link to="Customer">
					<span className="material-symbols-outlined">support_agent</span>
					Customer
				</Link>
			</div>

			<div
				className={`child ${color === "inv" ? "active" : ""}`}
				onClick={() => {
					colorChanger("inv");
				}}
			>
				<Link to="Inventory">
					<span className="material-symbols-outlined">inventory_2</span>
					Inventory
				</Link>
			</div>

			<div
				className={`child ${color === "item" ? "active" : ""}`}
				onClick={() => {
					colorChanger("item");
				}}
			>
				<Link to="Items">
					<span className="material-symbols-outlined">category</span>
					Items
				</Link>
			</div>

			<div
				className={`child ${color === "orders" ? "active" : ""}`}
				onClick={() => {
					colorChanger("orders");
				}}
			>
				<Link to="Orders">
					<span className="material-symbols-outlined">draft_orders</span>
					Oreders
				</Link>
			</div>

			<div
				className={`child ${color === "Alert" ? "active" : ""}`}
				onClick={() => {
					colorChanger("Alert");
				}}
			>
				<Link to="Alerts">
					<span className="material-symbols-outlined">
						circle_notifications
					</span>{" "}
					Alerts
				</Link>{" "}
			</div>
		</div>
	);
}

export default NavContainer;
