import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import Layout from "./components/Layout/Layout";
import api from "./axios";

function App() {
	const [isAuth, setIsAuth] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem("jwt");
		api
			.get("/users/me", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			.then(() => setIsAuth(true))
			.catch(() => {
				localStorage.removeItem("jwt");
			});
	}, []);

	return (
		<Router>
			<div className="App">
				<Navbar auth={isAuth} />
				<Layout>
					<Switch>
						<PrivateRoute
							path="/user"
							exact
							auth={isAuth}
							component={() => <div>private</div>}
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
						<PublicRoute path="/" exact component={Main} />
					</Switch>
				</Layout>
			</div>
		</Router>
	);
}

export default App;
