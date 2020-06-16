import React from "react";

const Article = ({
	title = "title",
	author = "author",
	date = "date",
	desc = "lorem",
	source = "src",
	url = "/",
}) => {
	const bgStyles = {
		padding: "2em",
		backgroundColor: "#fff",
		margin: "1em",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		color: "#707070",
	};

	const titleStyles = {
		margin: "0 0 .3em 0",
		fontSize: "1.65em",
	};

	const authorDateStyles = {
		fontSize: "0.65em",
		margin: "0 0 .6em 0",
	};

	return (
		<div style={bgStyles}>
			<h1 style={titleStyles}>{title}</h1>
			<div style={authorDateStyles}>
				<p>{author}</p>
				<p>{date}</p>
			</div>
			<p style={{ margin: "0 0 .6em 0" }}>{desc}</p>
			<a href={url}>{source}</a>
		</div>
	);
};

export default Article;
