import React, { useState } from "react";
import axios from "axios";

const SignIn = ({ setAuth }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const bgStyle = {
		backgroundColor: "#fff",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: "2em",
		maxWidth: "300px",
		margin: "auto",
	};

	const formStyle = {
		display: "flex",
		flexDirection: "column",
	};

	const inputStyle = {
		marginTop: "1em",
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email.length || !password.length) return;

		axios
			.post("http://localhost:8000/users/login", { email, password })
			.then((r) => {
				const token = r.data.token;
				localStorage.setItem("jwt", token);
				setAuth(true);
			})
			.catch((e) => console.log(e.message));
	};

	return (
		<div style={bgStyle}>
			<h2>Log In</h2>
			<form style={formStyle} onSubmit={handleSubmit}>
				<input
					style={inputStyle}
					type="text"
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				></input>
				<input
					style={inputStyle}
					type="password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				></input>
				<input style={inputStyle} type="submit" value="Send"></input>
			</form>
		</div>
	);
};

export default SignIn;
