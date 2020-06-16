import React from "react";
import Form from "../../components/SignUpForm/SignUpForm";

const SignUp = ({ setAuth }) => {
	return (
		<>
			<div style={{ gridColumn: "2 / 3" }}>
				<Form setAuth={setAuth} />
			</div>
		</>
	);
};

export default SignUp;
