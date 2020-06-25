import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	const { isAuth } = useContext(AuthContext);
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuth && restricted ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
