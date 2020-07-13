require("dotenv").config();
require("./db/db");
const express = require("express");
const cors = require("cors");
const path = require("path");
const users = require("./routes/users");
const news = require("./routes/news");

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
	origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/users", users);
app.use("/news", news);

if (process.env.NODE_ENV === "production") {
	const rootDir = path.join(__dirname, "..", "build");
	app.use(express.static(rootDir));

	app.get("*", (req, res) => {
		res.sendFile("index.html", { rootDir });
	});
}

app.listen(PORT, console.log(`Running on port ${PORT}`));
