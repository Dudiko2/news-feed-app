import React from "react";

const SignIn = () => {
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

	return (
		<div style={bgStyle}>
			<h2>Log In</h2>
			<form style={formStyle}>
				<input style={inputStyle} type="email" placeholder="email"></input>
				<input
					style={inputStyle}
					type="password"
					placeholder="password"
				></input>
				<input style={inputStyle} type="submit" value="Send"></input>
			</form>
		</div>
	);
};

export default SignIn;
