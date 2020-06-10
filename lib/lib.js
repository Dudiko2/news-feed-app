const querystring = require("querystring");

const makeQString = (queryObj) =>
	queryObj ? `?${querystring.stringify(queryObj)}` : "";

const isEmptyObj = (obj) => {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) return false;
	}

	return true;
};

module.exports = {
	makeQString,
	isEmptyObj,
};
