import React, { useState } from "react";
import api from "../../axios";

const Form = ({ setAuth }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const bgStyle = {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: "2em",
	};

	const formStyle = {
		display: "flex",
		flexDirection: "column",
	};

	const inputStyle = {
		marginTop: "1em",
		height: "4em",
		width: "20em",
		fontSize: "1em",
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) return;
		if (!email.length || !password.length || !confirmPassword.length) return;

		api
			.post("/users/signup", { email, password })
			.then((r) => {
				const token = r.data.token;
				localStorage.setItem("jwt", token);
				setAuth(true);
			})
			.catch(() => console.log("fail"));
	};

	return (
		<div style={bgStyle}>
			<h2 style={{ marginBottom: "1em" }}>Sign Up</h2>
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
				<input
					style={inputStyle}
					type="password"
					placeholder="confirm password"
					onChange={(e) => setConfirmPassword(e.target.value)}
					value={confirmPassword}
				></input>
				<input style={inputStyle} type="submit" value="Send"></input>
			</form>
		</div>
	);
};

export default Form;
