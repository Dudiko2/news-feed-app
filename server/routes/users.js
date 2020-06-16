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

router.patch("/", auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["sources", "langs", "password"];
	const isValidUpdate = updates.every((u) => allowedUpdates.includes(u));

	if (!isValidUpdate) return res.status(400).send({ error: "Invalid updates" });

	try {
		updates.forEach((u) => (req.user[u] = req.body[u]));
		await req.user.save();
		res.send(req.user);
	} catch (e) {
		res.status(400).send({ error: e.message });
	}
});

router.delete("/", auth, async (req, res) => {
	try {
		await User.deleteOne({ _id: req.user._id });
		res.send(req.user);
	} catch (e) {
		res.status(500).send({ error: e.message });
	}
});

module.exports = router;
