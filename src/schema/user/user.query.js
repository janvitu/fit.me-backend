import argon2 from "argon2";
import { createToken } from "../../utils/token";
import { getCoach } from "../coach/coach.models";
import { getSportsground } from "../sportsground/sportsground.models";
import { getSportsman } from "../sportsman/sportsman.models";

import User from "./user.models";

async function userSignIn(_, args, { db }) {
  const { email, password, accountType } = args;

  const user = User.getByEmail(email, db);

  if (!user) {
    throw new Error("User not found");
  }

  if (!user[`${accountType}_id`]) {
    throw new Error(`User does not have account type of '${accountType}'`);
  }

  if (!user.verified) {
    throw new Error("Unable to sign in. Please verify your email.");
  }

  const isValidPassword = await argon2.verify(user.password, password);

  if (!isValidPassword) {
    throw new Error("Invalid password");
  }

  const token = createToken({
    id: user.id,
    email: user.email,
    sportsman: user.sportsman_id,
    coach: user.coach_id,
    sportsground: user.sports_ground_id,
  });

  return {
    token,
    user,
  };
}

async function getUser(_, args, { db }) {
  const { email } = args;
  const user = await User.getByEmail(email, db);

  const sportsman = await getSportsman(user.sportsman_id, db);
  const coach = await getCoach(user.coach_id, db);
  const sportsground = await getSportsground(user.sports_ground_id, db);

  return {
    ...user,
    sportsman,
    coach,
    sportsground,
  };
}

export default {
  userSignIn,
  getUser,
};
