import * as argon2 from "argon2";
import { getCoach } from "../coach/coach.models";
import { getSportsground } from "../sportsground/sportsground.models";
import { getSportsman } from "../sportsman/sportsman.models";

export async function getUser(id, db) {
  const user = (await db.query("SELECT * FROM user WHERE id = ?", [id]))[0];
  let sportsman = null;
  let coach = null;
  let sportsground = null;
  if (user.sportsman_id) {
    sportsman = await getSportsman(user.sportsman_id, db);
  }
  if (user.coach_id) {
    coach = await getCoach(user.coach_id, db);
  }
  if (user.sports_ground_id) {
    sportsground = await getSportsground(user.sports_ground_id, db);
  }

  return { ...user, sportsman, coach, sportsground };
}

export const getUserByEmail = async (email, db) => {
  const user = (await db.query("SELECT * FROM user WHERE email = ?", [email]))[0];
  let sportsman = null;
  let coach = null;
  let sportsground = null;
  if (user.sportsman_id) {
    sportsman = await getSportsman(user.sportsman_id, db);
  }
  if (user.coach_id) {
    coach = await getCoach(user.coach_id, db);
  }
  if (user.sports_ground_id) {
    sportsground = await getSportsground(user.sports_ground_id, db);
  }

  return { ...user, sportsman, coach, sportsground };
};

export const createUser = async (args, { db }) => {
  const { email, password } = args;
  const passwordHash = await argon2.hash(password);
  await db.query("INSERT INTO user (email, password) VALUES (?, ?)", [email, passwordHash]);

  return true;
};

export const updateAccountReference = async (args, { db }) => {
  const { user, ref, accountReference } = args;
  await db.query(`UPDATE user SET ${accountReference} = ? WHERE id = ?`, [ref.id, user.id]);

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
  get: getUser,
  getByEmail: getUserByEmail,
  create: createUser,
  updateAccountReference,
  verifyUserEmail,
};
