import React from "react";

const Account = ({ user }) => {
	return (
		<div style={{ gridColumn: "2/3" }}>
			<div style={{ padding: "2em", backgroundColor: "var(--antidom)" }}>
				<h2 style={{ fontWeight: "normal" }}>{user.email}</h2>
				<div>
					<h3>Preferred languages</h3>
					<p>{user.langs}</p>
				</div>
			</div>
		</div>
	);
};

export default Account;
