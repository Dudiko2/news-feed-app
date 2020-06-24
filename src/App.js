import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
//COMPONENTS
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
// PAGES
import Main from "./pages/Main/Main";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Account from "./pages/Account/Account";

import api from "./axios";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [userData, setUserData] = useState(localStorage.getItem("user"));

	useEffect(() => {
		const token = localStorage.getItem("jwt");
		if (token) {
			api
				.get("/users/me", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((r) => {
					localStorage.setItem("user", JSON.stringify(r.data));
					setUserData(r.data);
					setIsAuth(true);
				})
				.catch(() => {
					localStorage.removeItem("jwt");
					localStorage.removeItem("user");
				});
		}
	}, []);

	return (
		<Router>
			<div className="App">
				<Navbar auth={isAuth} />
				<Layout>
					<Switch>
						<PublicRoute path="/" exact component={Main} />
						<PrivateRoute
							path="/account"
							exact
							auth={isAuth}
							component={() => <Account user={userData} />}
						/>
						<PublicRoute
							path="/signin"
							exact
							restricted={true}
							auth={isAuth}
							component={() => <SignIn setAuth={setIsAuth} />}
						/>
						<PublicRoute
							path="/signup"
							exact
							restricted={true}
							auth={isAuth}
							component={() => <SignUp setAuth={setIsAuth} />}
						/>
					</Switch>
				</Layout>
			</div>
		</Router>
	);
}

export default App;
