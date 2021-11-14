import * as argon2 from 'argon2';
import { createToken } from '../../libs/token';

export const sportsmanSignIn = async (_, { email, password }, { dbConnection }) => {
  const dbResponse = await dbConnection.query(
    'SELECT * FROM sportsman WHERE email = ?',
    [email],
  );
  const sportsman = dbResponse[0];
  const token = createToken({ id: sportsman.id });

  if (await argon2.verify(sportsman.password, password)) {
    const token = createToken({ id: sportsman.id });
    return {
      sportsman: { ...sportsman },
      token,
    };
  }
};

export const sportsmanSignUp = async (
  _,
  { name, surname, email, password },
  { dbConnection },
) => {
  const existingSportsman = (
    await dbConnection.query("SELECT * FROM sportsman WHERE email = ?", [email])
  )[0];

  if (existingSportsman) {
    throw new Error('This email was already taken.');
  }

  const passwordHash = await argon2.hash(password);

  const dbResponse = await dbConnection.query(
    'INSERT INTO sportsman (name, surname, email, password) VALUES (?, ?, ?, ?);',
    [name, surname, email, passwordHash],
  );

  return true;
};

export const coachSignUp = async (
  _,
  { name, surname, email, password, username, phone, vat_number  },
  { dbConnection },
) => {
  const existingCoach = (
    await dbConnection.query("SELECT * FROM coach WHERE email = ?", [email])
  )[0];

  if (existingCoach) {
    throw new Error('This email was already taken.');
  }

  const passwordHash = await argon2.hash(password);

  const dbResponse = await dbConnection.query(
    'INSERT INTO coach (name, surname, email, password, username, phone, vat_number) VALUES (?, ?, ?, ?, ?, ?, ?);',
    [name, surname, email, passwordHash, username, phone, vat_number],
  );

  return true;
};
