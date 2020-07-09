import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import MenuIcon from "../../icons/MenuIcon";
import Styles from "./Navbar.module.css";

const Navbar = () => {
	const context = useContext(AuthContext);
	const [isOpen, setIsOpen] = useState(false);

	const userMenu = context.isAuth ? (
		<>
			<NavLink exact activeClassName={Styles.ActiveLink} to="/">
				Explore
			</NavLink>
			<NavLink activeClassName={Styles.ActiveLink} to="account">
				Account
			</NavLink>
		</>
	) : (
		<>
			<NavLink exact activeClassName={Styles.ActiveLink} to="/">
				Explore
			</NavLink>
			<NavLink activeClassName={Styles.ActiveLink} to="/signin">
				Log In
			</NavLink>
			<NavLink to="signup">
				<div className={Styles.Signup}>Sign Up</div>
			</NavLink>
		</>
	);

	const menuCls = [Styles.userMenu, isOpen ? Styles.openMenu : ""];

	return (
		<>
			<nav className={Styles.navStyle}>
				<NavLink style={{ opacity: 1 }} to="/">
					<h1>Feed</h1>
				</NavLink>
				<MenuIcon
					cls={Styles.Icon}
					open={isOpen}
					onClick={() => setIsOpen(!isOpen)}
				/>
				{/* desktop menu */}
				<div className={Styles.Desktop}>{userMenu}</div>
			</nav>
			{/* mobile menu */}
			<div onClick={() => setIsOpen(false)} className={menuCls.join(" ")}>
				{userMenu}
			</div>
		</>
	);
};

export default Navbar;
