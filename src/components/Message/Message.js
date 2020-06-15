import React from "react";

const Message = ({ txt, moreStyle = {}, className = "" }) => {
	const layoutStyle = {
		display: "flex",
		justifyContent: "center",
		position: "absolute",
		bottom: "6em",
		margin: "0 auto",
		width: "100%",
	};
	const bgStyle = {
		backgroundColor: "var(--dom)",
		color: "var(--antidom)",
		padding: "1em 2em",
		borderRadius: ".6em",
	};

	return txt && txt.length ? (
		<div style={layoutStyle}>
			<div className={className} style={{ ...bgStyle, ...moreStyle }}>
				{txt}
			</div>
		</div>
	) : null;
};

export default Message;
