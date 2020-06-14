import React from "react";

const Message = ({ txt }) => {
	const layoutStyle = {
		position: "absolute",
		height: "100vh",
		width: "100%",
		top: "0",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};
	const bgStyle = {
		position: "relative",
		backgroundColor: "var(--dom)",
		color: "var(--antidom)",
		padding: "1em 2em",
		borderRadius: ".6em",
	};

	return txt.length ? (
		<div style={layoutStyle}>
			<div style={bgStyle}>{txt}</div>
		</div>
	) : null;
};

export default Message;
