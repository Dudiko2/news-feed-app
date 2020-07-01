const axios = require("axios");
const { makeQString } = require("../../lib/lib");

const newsAxios = axios.create({
	baseURL: "https://newsapi.org/v2",
	headers: { Authorization: process.env.NEWS_API_KEY },
});

const hasReqKey = (query) => {
	const reqKeys = ["sources", "q", "language", "country", "category"];
	return reqKeys.findIndex((k) => query[k]) !== -1;
};

const news = {
	getHeadlines(query) {
		let qString;
		if (!query || !hasReqKey(query)) {
			qString = makeQString({ country: "us", ...query });
		} else {
			qString = makeQString(query);
		}

		return newsAxios.get("/top-headlines" + qString);
	},
};

module.exports = news;
