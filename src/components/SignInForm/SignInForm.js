import React, { useState } from "react";
import api from "../../axios";
import PulseLoader from "react-spinners/PulseLoader";

const Form = ({ setAuth, showMsg }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSubmitting, setSubmitting] = useState(false);

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
		if (!email.length || !password.length) return;

		setSubmitting(true);
		api
			.post("http://localhost:8000/users/login", { email, password })
			.then((r) => {
				const token = r.data.token;
				localStorage.setItem("jwt", token);
				setAuth(true);
			})
			.catch(() => {
				setSubmitting(false);
				showMsg("Unable to login", 3000);
			});
	};

	const button = isSubmitting ? (
		<PulseLoader
			css="margin-top: 1em;"
			color="var(--dom)"
			size=".5em"
			margin="0px"
		/>
	) : (
		<input style={inputStyle} type="submit" value="Send"></input>
	);

	return (
		<div style={bgStyle}>
			<h2 style={{ marginBottom: "1em" }}>Log In</h2>
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
				{button}
			</form>
		</div>
	);
};

export default Form;
