import * as argon2 from "argon2";
import { createToken } from "../../libs/token";
import { createUsername } from "../../utils/stringNormalization";

export const sportsmanSignIn = async (_, args, context) => {
	const { email, password } = args;
	const dbConnection = context.dbConnection;

	const dbResponse = await dbConnection.query("SELECT * FROM sportsman WHERE email = ?", [email]);
	const sportsman = dbResponse[0];

	if (await argon2.verify(sportsman.password, password)) {
		const token = createToken({ id: sportsman.id });
		return {
			sportsman: { ...sportsman },
			token,
		};
	}
};

export const sportsmanSignUp = async (_, args, context) => {
	const { name, surname, email, password, secondPassword } = args;
	const dbConnection = context.dbConnection;
	if (password !== secondPassword) {
		throw new Error("Passwords do not match");
	}

	const existingSportsman = (
		await dbConnection.query("SELECT * FROM sportsman WHERE email = ?", [email])
	)[0];

	if (existingSportsman) {
		throw new Error("This email was already taken.");
	}

	const passwordHash = await argon2.hash(password);
	const username = createUsername(name + surname);

	const dbResponse = await dbConnection.query(
		"INSERT INTO sportsman (name, surname, email, password, username) VALUES (?, ?, ?, ?, ?);",
		[name, surname, email, passwordHash, username],
	);

	return true;
};
