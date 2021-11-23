import * as argon2 from "argon2";
import { createToken } from "../../libs/token";
import { createUsername } from "../../utils/stringNormalization";

export const sportsgroundSignUp = async (_, args, context) => {
	const {
		name,
		address: { street, city, zip, country = "Czech Republic" },
		email,
		password,
		secondPassword,
		vat_number,
	} = args;

	const { dbConnection } = context;

	if (password !== secondPassword) {
		throw new Error("Passwords do not match");
	}

	const existingSportsground = (
		await dbConnection.query("SELECT * FROM sportsground WHERE email = ?", [email])
	)[0];

	if (existingSportsground) {
		throw new Error("This email was already taken.");
	}

	const username = createUsername(name);
	const passwordHash = await argon2.hash(password);

	await dbConnection
		.query(
			"INSERT INTO sportsground (name, street, city, zip, country, email, password, vat_number, username) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
			[name, street, city, zip, country, email, passwordHash, vat_number, username],
		)
		.catch((err) => {
			throw new Error(err);
		});
	console.log(dbResponse);

	return true;
};

export const sporstgroundSignIn = async (_, args, context) => {
	const { email, password } = args;
	const { dbConnection } = context;

	const existingSportsground = (
		await dbConnection.query("SELECT * FROM sportsground WHERE email = ?", [email])
	)[0];

	if (!existingSportsground) {
		throw new Error("This email is not registered.");
	}

	const isCorrectPassword = await argon2.verify(existingSportsground.password, password);

	if (!isCorrectPassword) {
		throw new Error("Incorrect password.");
	}

	const token = createToken(existingSportsground.id);
	return {
		sportsground: { ...existingSportsground },
		token: token,
	};
};
