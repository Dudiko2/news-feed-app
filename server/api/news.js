const axios = require("axios");
const { makeQString, isEmptyObj } = require("../../lib/lib");

const newsAxios = axios.create({
	baseURL: "https://newsapi.org/v2",
	headers: { Authorization: process.env.NEWS_API_KEY },
});

const news = {
	getHeadlines(query) {
		let qString;
		if (!query || isEmptyObj(query)) {
			qString = makeQString({ country: "us" });
		} else {
			qString = makeQString(query);
		}

		return newsAxios.get("/top-headlines" + qString);
	},
};

module.exports = news;
