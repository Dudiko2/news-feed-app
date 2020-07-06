import React, { useEffect, useState, useCallback } from "react";
import api from "../../axios";
import PulseLoader from "react-spinners/PulseLoader";
import Article from "../../components/Article/Article";

const Main = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const getTopNews = useCallback((page) => {
		api.get(`/news/top?page=${page}`).then((r) => {
			setArticles((articles) => articles.concat(r.data.articles));
			setLoading(false);
		});
	}, []);

	useEffect(() => {
		getTopNews(1);
	}, [getTopNews]);

	return (
		<main style={{ gridColumn: "2 / 3" }}>
			{articles.map((a, index) => (
				<Article article={a} key={a.url + index} />
			))}
			<PulseLoader
				css={`
					display: ${isLoading ? "flex" : "none"};
					justify-content: center;
					align-items: center;
					height: 100%;
					margin-top: 1em;
				`}
				color="var(--dom)"
			/>
		</main>
	);
};

export default Main;
