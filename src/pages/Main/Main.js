import React, { useEffect, useState } from "react";
import api from "../../axios";
import PulseLoader from "react-spinners/PulseLoader";
import Article from "../../components/Article/Article";

const Main = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		api.get("/news/top").then((r) => {
			setArticles(r.data.articles);
			setLoading(false);
		});
	}, []);

	return (
		<>
			<div style={{ gridColumn: "2 / 3" }}>
				{isLoading ? (
					<PulseLoader
						css="display: flex; justify-content: center; align-items: center; height: 100%; margin-top: 1em;"
						color="var(--dom)"
					/>
				) : (
					articles.map((a) => <Article article={a} key={a.url} />)
				)}
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
