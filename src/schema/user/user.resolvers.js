import argon2 from "argon2";
import { getUserByEmail } from "../../models/User";
import jwt from "jsonwebtoken";
import { createToken } from "../../utils/token";
import initMailer from "../../utils/nodemailerConnection";

const resolvers = {
  Query: {
    userSignIn: async (_, args, { db }) => {
      const { email, password, accType = "sportsman" } = args;

      const user = await getUserByEmail(email, db);

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

      const token = createToken({ id: user.id, email: user.email });
      return {
        token: token,
        user: { ...user },
      };
    },
    getUser: async (_, args, { db }) => {
      const { email } = args;
      const user = await db.query(`SELECT * FROM users WHERE email = ?`, [email])[0];
      const sportsman = await db.query(`SELECT * FROM sportsmen WHERE id = ?`, [
        user.sportsman_id,
      ])[0];
      const sportsmanAddress = await db.query(`SELECT * FROM adresses WHERE id = ?`, [
        sportsman.adress_id,
      ])[0];
      const coach = await db.query(`SELECT * FROM coaches WHERE id = ?`, [user.coach_id])[0];
      const sportsground = await db.query(`SELECT * FROM sports_grounds WHERE id = ?`, [
        user.sports_ground_id,
      ])[0];
      const sportsgroundAddress = await db.query(`SELECT * FROM adresses WHERE id = ?`, [
        sportsground.adress_id,
      ])[0];

      return {
        ...user,
        sportsman: {
          ...sportsman,
          address: {
            ...sportsmanAddress,
          },
        },
        coach: {
          ...coach,
        },
        sportsground: {
          ...sportsground,
          address: {
            ...sportsgroundAddress,
          },
        },
      };
    },
  },
  Mutation: {
    resetPassword: async (_, args, { db }) => {
      const { email, originPassword, newPassword } = args;
      const user = await getUserByEmail(email, db);
      const originPasswordIsValid = await argon2.verify(user.password, originPassword);

      if (!originPasswordIsValid && !user) {
        throw new Error("Wrong email or password");
      }

      const passwordHash = await argon2.hash(newPassword);
      if (user.password === passwordHash) {
        throw new Error("New password must be different from the old one");
      }
      await db
        .query("UPDATE user SET password = ? WHERE email = ?", [passwordHash, email])
        .catch(() => {
          throw new Error("Unexpected error");
        });

      return true;
    },
  },
};

export default resolvers;
