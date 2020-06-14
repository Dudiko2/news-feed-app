import React, { useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import axios from "axios";

const Main = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/news/top").then((r) => {
			console.log(r.data.articles);
			setArticles(r.data.articles);
		});
	}, []);

	return articles.map((a) => (
		<Article
			author={a.author}
			desc={a.description}
			title={a.title}
			source={a.source.name}
			url={a.url}
			date={new Date(a.publishedAt).toDateString()}
			key={a.url}
		/>
	));
};

export default Main;
