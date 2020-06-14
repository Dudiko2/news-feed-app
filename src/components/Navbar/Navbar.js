import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const navStyle = {
		display: "flex",
		backgroundColor: "#fff",
		padding: "1em 4em",
		alignItems: "center",
		justifyContent: "space-between",
	};
	const userStyle = {
		backgroundColor: "#CFCFCF",
		display: "inline-block",
		height: "2em",
		width: "2em",
		borderRadius: "100%",
		marginLeft: "1.6em",
	};
	const searchStyle = {
		backgroundColor: "#CFCFCF",
		borderStyle: "none",
		height: "2em",
		paddingLeft: "1em",
		borderRadius: "0.6em",
		marginLeft: "1.6em",
	};

	return (
		<nav style={navStyle}>
			<h1>Feed</h1>
			<div style={{ display: "flex", alignItems: "center" }}>
				<NavLink to="/">Explore</NavLink>
				<input style={searchStyle} type="text" placeholder="Search..."></input>
				<div style={userStyle}></div>
			</div>
		</nav>
	);
};

export default Navbar;
