const express = require("express");
const User = require("../db/models/user");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/me", auth, (req, res) => {
	res.send(req.user);
});

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

router.patch("/follow", auth, async (req, res) => {
	const source = req.body.source;
	const sources = req.user.sources;
	if (!sources.find((s) => s === source)) {
		sources.push(source);
		try {
			await req.user.save();
			return res.send({ user: req.user });
		} catch (e) {
			return res.status(400).send({ error: e.message });
		}
	}

	res.send({ user: req.user });
});

module.exports = router;
