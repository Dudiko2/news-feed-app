const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true,
		validate(v) {
			return validator.isEmail(v);
		},
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
	langs: [
		{
			type: String,
			lowercase: true,
		},
	],
	sources: [{ type: String, lowercase: true }],
});

userSchema.methods.toJSON = function () {
	const usr = this;
	const userObject = usr.toObject();

	delete userObject.password;
	delete userObject.tokens;

	return userObject;
};

userSchema.methods.genToken = function () {
	const usr = this;

	const token = JWT.sign({ _id: usr._id }, process.env.JWT_SECRET, {
		expiresIn: "1h",
	});

	return token;
};

userSchema.methods.appendToken = function (token) {
	const usr = this;
	usr.tokens = usr.tokens.concat({ token });
};

userSchema.statics.getByCredentials = async function ({ email, password }) {
	const usr = await User.findOne({ email });

	if (!usr) throw new Error("unable to login");

	const isMatch = await bcrypt.compare(password, usr.password);

	if (!isMatch) throw new Error("unable to login");

	return usr;
};

userSchema.pre("save", async function (next) {
	const usr = this;

	if (usr.isModified("password")) {
		usr.password = await bcrypt.hash(usr.password, 8);
	}
	next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
