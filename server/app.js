require("dotenv").config();
require("./db/db");
const express = require("express");
const users = require("./routes/users");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/users", users);

app.get("*", (req, res) => {
	res.send("Hey");
});

app.listen(PORT, console.log(`Running on port ${PORT}`));
