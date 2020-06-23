import React from "react";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import Styles from "./Article.module.css";

const Article = ({ article }) => {
	return (
		<a className={Styles.Article} href={article.url}>
			<div>
				<img src={article.urlToImage} alt={article.title} width="100%" />
				<ArticleDetails
					author={article.author}
					desc={article.description}
					title={article.title}
					date={new Date(article.publishedAt).toDateString()}
				/>
			</div>
		</a>
	);
};

export default Article;
