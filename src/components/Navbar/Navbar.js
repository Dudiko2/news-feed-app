import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Styles from "./Navbar.module.css";

const Navbar = () => {
	const context = useContext(AuthContext);

	const userStyle = {
		backgroundColor: "#CFCFCF",
		display: "inline-block",
		height: "2em",
		width: "2em",
		borderRadius: "100%",
	};

	const userMenu = context.isAuth ? (
		<>
			<NavLink to="/">Explore</NavLink>
			<NavLink to="account">
				<div style={userStyle}></div>
			</NavLink>
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
		<nav className={Styles.navStyle}>
			<NavLink to="/">
				<h1>Feed</h1>
			</NavLink>
			<div className={Styles.userMenu}>{userMenu}</div>
		</nav>
	);
};

export default Navbar;
