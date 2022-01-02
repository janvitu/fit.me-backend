import * as argon2 from "argon2";

export const getUserByEmail = async (email, db) => {
  const user = await db.query(`SELECT * FROM user WHERE email = ?`, [email]);

  return user[0];
};

export const createUser = async (args, { db }) => {
  const { email, password } = args;
  const passwordHash = await argon2.hash(password);
  await db.query("INSERT INTO user (email, password) VALUES (?, ?)", [email, passwordHash]);

  return true;
};

export const updateAccRef = async (args, { db }) => {
  const { user, ref, accref } = args;
  await db.query(`UPDATE user SET ${accref} = ? WHERE id = ?`, [ref.id, user.id]);

  return true;
};

export const verifyUserEmail = async (args, { db }) => {
  const { id } = args;
  if (!id) {
    throw new Error("No user id provided");
  }

  await db.query(`UPDATE user SET verified = 1 WHERE id = ?`, [id]).catch((err) => {
    throw new Error(err);
  });

  return true;
};

export default {
  getUserByEmail,
  createUser,
  updateAccRef,
  verifyUserEmail,
};
