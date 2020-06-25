import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isAuth } = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={(props) =>
				isAuth ? <Component {...props} /> : <Redirect to="/" />
			}
		/>
	);
};

export default PrivateRoute;
