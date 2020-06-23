import React from "react";
import Styles from "./ArticleDetails.module.css";

const ArticleDetails = ({
	title = "title",
	author = "author",
	date = "date",
	desc = "lorem",
}) => {
	return (
		<div className={Styles.bgStyles}>
			<h1 className={Styles.titleStyles}>{title}</h1>
			<div className={Styles.authorDateStyles}>
				<p>{author}</p>
				<p>{date}</p>
			</div>
			<p style={{ margin: "0 0 .6em 0" }}>{desc}</p>
		</div>
	);
};

export default ArticleDetails;
