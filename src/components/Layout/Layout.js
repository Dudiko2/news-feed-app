import React from "react";
import style from "./Layout.module.css";

// expects 3 columns
const Layout = ({ children }) => {
	return <div className={style.Layout}>{children}</div>;
};

export default Layout;
