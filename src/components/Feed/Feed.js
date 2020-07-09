import React from "react";
import Article from "../Article/Article";
import { InView } from "react-intersection-observer";

const Feed = ({ articles, getNews }) => {
	return (
		<InView
			onChange={(inView) => {
				if (articles.length && inView) getNews();
			}}
		>
			{({ ref }) =>
				articles.map((a, index) => (
					<Article
						refer={index === articles.length - 1 ? ref : null}
						article={a}
						key={a.url + index}
					/>
				))
			}
		</InView>
	);
};

export default Feed;
