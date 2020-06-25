import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const Account = () => {
	const { userData } = useContext(AuthContext);
	return (
		<div style={{ gridColumn: "2/3" }}>
			<div style={{ padding: "2em", backgroundColor: "var(--antidom)" }}>
				<h2 style={{ fontWeight: "normal" }}>{userData.email}</h2>
				<div>
					<h3>Preferred languages</h3>
					<p>{userData.langs}</p>
				</div>
			</div>
		</div>
	);
};

export default Account;
