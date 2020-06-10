// parent : /news
const express = require("express");
const newsApi = require("../api/news");

const router = express.Router();

router.get("/top", async (req, res) => {
	try {
		const newsRes = await newsApi.getHeadlines(req.query);
		res.send(newsRes.data);
	} catch (e) {
		res.status(500).send({ e: e.message });
	}
});

module.exports = router;
