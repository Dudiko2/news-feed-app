import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import Layout from "./components/Layout/Layout";

function App() {
	const [isAuth, setIsAuth] = useState(false);

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
