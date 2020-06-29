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

import { AuthProvider } from "./context/AuthContext";

import api from "./axios";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	const [userData, setUserData] = useState(null);

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
					setUserData(r.data);
					setIsAuth(true);
				})
				.catch(() => {
					localStorage.removeItem("jwt");
				});
		}
	}, []);

	return (
		<Router>
			<AuthProvider value={{ isAuth, userData, setIsAuth, setUserData }}>
				<div className="App">
					<Navbar />
					<Layout>
						<Switch>
							<PublicRoute path="/" exact component={Main} />
							<PrivateRoute
								path="/account"
								exact
								component={() => <Account />}
							/>
							<PublicRoute
								path="/signin"
								exact
								restricted={true}
								component={() => <SignIn />}
							/>
							<PublicRoute
								path="/signup"
								exact
								restricted={true}
								component={() => <SignUp />}
							/>
						</Switch>
					</Layout>
				</div>
			</AuthProvider>
		</Router>
	);
}

export default App;
