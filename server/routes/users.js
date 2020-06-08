const express = require("express");
const User = require("../db/models/user");

const router = express.Router();

router.post("/signup", async (req, res) => {
	const u = new User(req.body);

	try {
		const token = u.genToken();
		u.appendToken(token);

		await u.save();
		res.status(201).send({ user: u, token });
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

router.post("/login", async (req, res) => {
	try {
		const u = await User.getByCredentials(req.body);
		const token = u.genToken();
		u.appendToken(token);

		await u.save();
		res.send({ user: u, token });
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

module.exports = router;
