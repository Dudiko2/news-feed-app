import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Styles from "./Account.module.css";

const dict = {
	langs: {
		he: "Hebrew",
		en: "English",
	},
};

const Account = () => {
	const { userData } = useContext(AuthContext);

	const languages = userData.langs
		.filter((l) => dict.langs[l])
		.map((l) => <li>{dict.langs[l]}</li>);

	const sources = userData.sources.map((s) => <li>{s}</li>);

	return (
		<div className={Styles.Account}>
			<div className={Styles.Cont}>
				<h2>{userData.email}</h2>
				<div>
					<h3>Preferred languages</h3>
					<ul>{languages}</ul>
				</div>
				<div>
					<h3>Following</h3>
					<ul>{sources}</ul>
				</div>
			</div>
		</div>
	);
};

export default Account;
