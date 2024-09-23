import React from "react";
import NavContainer from "../components/navbar/NavContainer";
import icon from "../assets/nestle-bg.jpg";
import man from "../assets/tharun.jpg";
import "../styles/NavBar.css";
function NavBar() {
	return (
		<div className="container">
			<div className="icon">
				<span className="material-symbols-outlined ">android</span>
			</div>
			<NavContainer className="nav_con" />
			<div className="bottomTag">
				<img src={icon} className="nestle" />
				<img src={man} className="man" />
			</div>
		</div>
	);
}

export default NavBar;
