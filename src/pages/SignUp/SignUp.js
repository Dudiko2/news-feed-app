import React from "react";
import Form from "../../components/SignUpForm/SignUpForm";

const SignUp = ({ setAuth }) => {
	return (
		<>
			<div style={{ gridColumn: "1 / -1" }}>
				<Form setAuth={setAuth} />
			</div>
		</>
	);
};

export default SignUp;
