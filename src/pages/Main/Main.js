import React, { useEffect, useState, useCallback } from "react";
import api from "../../axios";
import PulseLoader from "react-spinners/PulseLoader";
import Feed from "../../components/Feed/Feed";

const Main = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [page, setPage] = useState(1);

	const getTopNews = useCallback((p) => {
		console.log("gettop");
		setLoading(true);

		api
			.get(`/news/top?page=${p}`)
			.then((r) => {
				if (r.data.articles.length) {
					setArticles((articles) => articles.concat(r.data.articles));
					setPage((page) => page + 1);
				}
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		console.log("effect");
		getTopNews(1);
	}, [getTopNews]);

	return (
		<main style={{ gridColumn: "2 / 3" }}>
			{articles.length ? (
				<Feed articles={articles} getNews={() => getTopNews(page)} />
			) : null}
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
