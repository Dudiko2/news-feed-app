require("dotenv").config();
require("./db/db");
const express = require("express");
const users = require("./routes/users");
const news = require("./routes/news");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/users", users);
app.use("/news", news);

app.get("*", (req, res) => {
	res.send("Hey");
});

app.listen(PORT, console.log(`Running on port ${PORT}`));
