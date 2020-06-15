import React from "react";
import style from "./Layout.module.css";

// expects 3 children
const Layout = ({ children }) => {
	return <div className={style.Layout}>{children}</div>;
};

export default Layout;
