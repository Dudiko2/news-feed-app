import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import SignIn from "./pages/SignIn/SignIn";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
// import Message from "./components/Message/Message";

function App() {
	const [isAuth, setIsAuth] = useState(false);
	// const [msg, setMsg] = useState("");

	// const showMsg = (m, milisecs) => {
	// 	setMsg(m);
	// 	setTimeout(() => setMsg(""), milisecs);
	// };

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
						component={() => (
							<SignIn setAuth={setIsAuth} /*showMsg={showMsg}*/ />
						)}
					/>
					<PublicRoute path="/" exact component={Main} />
				</Switch>
				{/* <Message txt={msg} /> */}
			</div>
		</Router>
	);
}

export default App;
