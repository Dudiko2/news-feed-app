import React from "react";
import Article from "../Article/Article";
import { InView } from "react-intersection-observer";

const Feed = ({ articles, getTopNews }) => {
	return (
		<InView
			onChange={(inView) => {
				console.log(inView);
				if (articles.length && inView) getTopNews();
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
