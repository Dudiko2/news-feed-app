const axios = require("axios");
const querystring = require("querystring");

const newsAxios = axios.create({
	baseURL: "https://newsapi.org/v2",
	headers: { Authorization: process.env.NEWS_API_KEY },
});

const news = {
	getHeadlines(query = { country: "us" }) {
		let qString;
		if (query) qString = "?" + querystring.stringify(query);

		return newsAxios.get("/top-headlines" + qString);
	},
};

module.exports = news;
