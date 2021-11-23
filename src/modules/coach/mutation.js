import * as argon2 from "argon2";
import { createToken } from "../../libs/token";
import { createUsername } from "../../utils/stringNormalization";

export const coachSignUp = async (_, args, context) => {
	const { name, surname, email, password, secondPassword, vat_number } = args;
	const { dbConnection } = context;

	if (password !== secondPassword) throw new Error("Passwords do not match");

	const existingCoach = (
		await dbConnection.query("SELECT * FROM coach WHERE email = ?", [email])
	)[0];

	if (existingCoach) {
		throw new Error("This email was already taken.");
	}

	const passwordHash = await argon2.hash(password);
	const username = createUsername(name + surname);

	const dbResponse = await dbConnection
		.query(
			"INSERT INTO coach (name, surname, email, password, username, vat_number) VALUES (?, ?, ?, ?, ?, ?);",
			[name, surname, email, passwordHash, username, vat_number],
		)
		.catch((err) => {
			throw new Error(err);
		});
	console.log(dbResponse);

	return true;
};

export const coachSignIn = async (_, args, context) => {
	const { email, password } = args;
	const { dbConnection } = context;

	const existingCoach = await dbConnection.query("SELECT * FROM coach WHERE email = ?", [email])[0];

	if (!existingCoach) {
		throw new Error("This email does not exist.");
	}

	const isCorrectPassword = await argon2.verify(existingSportsground.password, password);

	if (!isCorrectPassword) {
		throw new Error("Incorrect password.");
	}

	const token = createToken(existingCoach.id);
	return {
		coach: { ...existingCoach },
		token: token,
	};
};
