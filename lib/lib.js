const querystring = require("querystring");

const makeQString = (queryObj) =>
	queryObj ? `?${querystring.stringify(queryObj)}` : "";

module.exports = {
	makeQString,
};
