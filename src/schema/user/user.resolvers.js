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
    forgottenPassword: async (_, args, { db }) => {
      const { email } = args;
      const user = getUserByEmail(email, db);

      if (!user) {
        throw Error("User does not exist.");
      }

      const argonResponse = await argon2.hash(Date.now().toString());
      const lostPasswordHash = argonResponse.substr(argonResponse.length - 20);

      await db.query(`UPDATE user SET password_reset_hash = ? WHERE id = ?`, [
        lostPasswordHash,
        user.id,
      ]);

      const mailer = initMailer();
      const data = {
        from: process.env.G_USER,
        to: user.email,
        subject: "Password reset Mail",
        html: `Pro obnovení hesla klikněte <a href="${process.env.RESET_PASSWORD_MAIL_URL}${lostPasswordHash}">zde</a>`,
      };

      mailer.sendMail(data).catch((err) => {
        console.log(err);
      });

      return true;
    },
    resetPassword: async (_, args, { db }) => {
      const { newPassword, passwordResetHash } = args;
      let userByResetPswdHash = (
        await db.query(`SELECT * FROM user WHERE password_reset_hash = ?`, [passwordResetHash])
      )[0];

      if (userByResetPswdHash === undefined) {
        throw Error("User with given hash does not exist.");
      }

      let argonHash = await argon2.hash(newPassword);
      await db.query(`UPDATE user SET password = ?, password_reset_hash = ? WHERE id = ?`, [
        argonHash,
        null,
        userByResetPswdHash.id,
      ]);

      return true;
    },
  },
};

export default resolvers;
