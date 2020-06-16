import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Navbar.module.css";

const Navbar = ({ auth }) => {
	const navStyle = {
		display: "flex",
		backgroundColor: "#fff",
		padding: "1em 4em",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottom: "2px solid var(--dom)",
	};
	const userStyle = {
		backgroundColor: "#CFCFCF",
		display: "inline-block",
		height: "2em",
		width: "2em",
		borderRadius: "100%",
	};

	const userMenu = auth ? (
		<>
			<NavLink to="/">Explore</NavLink>
			<div style={userStyle}></div>
		</>
	) : (
		<>
			<NavLink to="/signin">Log In</NavLink>
			<NavLink to="signup">
				<div className={Styles.Signup}>Sign Up</div>
			</NavLink>
		</>
	);

	return (
		<nav style={navStyle}>
			<NavLink to="/">
				<h1>Feed</h1>
			</NavLink>
			<div className={Styles.userMenu}>{userMenu}</div>
		</nav>
	);
};

export default Navbar;
