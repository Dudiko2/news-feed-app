import React, { useState } from "react";
import Message from "../../components/Message/Message";
import Form from "../../components/SignInForm/SignInForm";

const SignIn = ({ setAuth }) => {
	const [msg, setMsg] = useState("");
	const [moreStyle, setMoreStyle] = useState({ opacity: 1 });

	const showMsg = (m, milisecs) => {
		setMsg(m);
		setTimeout(() => setMoreStyle({ opacity: 0 }), 0);
		setTimeout(() => {
			setMsg("");
			setMoreStyle({ opacity: 1 });
		}, milisecs);
	};

	return (
		<>
			<div style={{ gridColumn: "1 / -1" }}>
				<Form showMsg={showMsg} setAuth={setAuth} />
			</div>
			<Message className="fadeOutTrans" txt={msg} moreStyle={moreStyle} />
		</>
	);
};

export default SignIn;
