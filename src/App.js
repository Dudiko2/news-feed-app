import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import SignIn from "./pages/SignIn/SignIn";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [isAuth, setIsAuth] = useState(false);

	return (
		<Router>
			<div className="App">
				<Navbar />
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
				</Switch>
			</div>
		</Router>
	);
}

export default App;
