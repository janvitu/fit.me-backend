import argon2 from "argon2";
import { createToken } from "../../utils/token";
import jwt from "jsonwebtoken";

import User from "./user.models";

async function userSignIn(_, args, { db }) {
  const { email, password, accType } = args;

  const user = await User.getByEmail(email, db);

  if (!user) {
    throw new Error("User not found");
  }

  if (!user[`${accType}_id`]) {
    throw new Error(`User does not have account type of '${accType}'`);
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

  return user;
}

async function getUserByToken(_, args, { db }) {
  const { token } = args;
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.get(decoded.id, db);

  return user;
  // getUserByToken(token: String!): User
}

export default {
  getUserByToken,
  userSignIn,
  getUser,
};
