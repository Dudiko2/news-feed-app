import React, { useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import api from "../../axios";

const Main = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		api.get("/news/top").then((r) => {
			setArticles(r.data.articles);
		});
	}, []);

	return (
		<>
			<div style={{ gridColumn: "2 / 3" }}>
				{articles.map((a) => (
					<Article
						author={a.author}
						desc={a.description}
						title={a.title}
						source={a.source.name}
						url={a.url}
						date={new Date(a.publishedAt).toDateString()}
						key={a.url}
					/>
				))}
			</div>
			<div>
				<div
					style={{
						position: "sticky",
						top: "5em",
						display: "flex",
						padding: "2em",
						backgroundColor: "var(--antidom)",
					}}
				>
					hello
				</div>
			</div>
		</>
	);
};

export default Main;
