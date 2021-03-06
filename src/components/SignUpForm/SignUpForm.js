import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Styles from "./SignUpForm.module.css";
import api from "../../axios";

const Form = () => {
	const { setIsAuth, setUserData } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== confirmPassword) return;
		if (!email.length || !password.length || !confirmPassword.length) return;

		api
			.post("/users/signup", { email, password })
			.then((r) => {
				const { token, ...user } = r.data;
				localStorage.setItem("jwt", token);

				setUserData(user.user);
				setIsAuth(true);
			})
			.catch(() => console.log("fail"));
	};

	return (
		<div className={Styles.bgStyle}>
			<h2>Sign Up</h2>
			<form className={Styles.formStyle} onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				></input>
				<input
					type="password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				></input>
				<input
					type="password"
					placeholder="confirm password"
					onChange={(e) => setConfirmPassword(e.target.value)}
					value={confirmPassword}
				></input>
				<input type="submit" value="Send"></input>
			</form>
		</div>
	);
};

export default Form;
