import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import api from "../../axios";
import PulseLoader from "react-spinners/PulseLoader";
import Styles from "./SignInForm.module.css";

const Form = ({ showMsg }) => {
	const { setIsAuth } = useContext(AuthContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSubmitting, setSubmitting] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email.length || !password.length)
			return showMsg("Please fill all the fields", 3000);

		setSubmitting(true);
		api
			.post("/users/login", { email, password })
			.then((r) => {
				const { token, ...user } = r.data;
				localStorage.setItem("jwt", token);
				localStorage.setItem("user", JSON.stringify(user.user));
				setIsAuth(true);
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
		<input type="submit" value="Send"></input>
	);

	return (
		<div className={Styles.bgStyle}>
			<h2>Log In</h2>
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
				{button}
			</form>
		</div>
	);
};

export default Form;
