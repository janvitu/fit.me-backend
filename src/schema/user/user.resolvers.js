import argon2 from "argon2";
import { getUserByEmail } from "../user/user.models";
import { verifyToken } from "../../utils/token";
import { sendPasswordResetEmail } from "../../utils/sendPasswordResetEmail";
import userQuery from "./user.query";

const resolvers = {
  Query: {
    ...userQuery,
  },
  Mutation: {
    forgotenPassword: async (_, args, { db, mailer }) => {
      const { email } = args;
      const user = await getUserByEmail(email, db);
      if (!user) {
        throw Error("User does not exist.");
      }

      const lostPasswordHash = (Math.random() + 1).toString(36).substring(2);

      await db
        .query(`UPDATE user SET password_reset_hash = ? WHERE id = ?`, [lostPasswordHash, user.id])
        .catch((err) => {
          throw new Error(err);
        });

      sendPasswordResetEmail(mailer, email, lostPasswordHash);

      return true;
    },
    resetPassword: async (_, args, { db }) => {
      const { newPassword, passwordResetHash } = args;
      let user = (
        await db.query(`SELECT * FROM user WHERE password_reset_hash = ?`, [passwordResetHash])
      )[0];

      if (!user) {
        throw Error("User with given hash does not exist.");
      }

      let argonHash = await argon2.hash(newPassword);
      await db.query(`UPDATE user SET password = ?, password_reset_hash = ? WHERE id = ?`, [
        argonHash,
        null,
        user.id,
      ]);

      return true;
    },
    changePassword: async (_, args, { db }) => {
      const { token, oldPassword, newPassword } = args;
      if (!token) {
        throw new Error("No token provided");
      }

      const decoded = verifyToken(token);
      if (!decoded) {
        throw new Error("Invalid token");
      }

      const user = await getUserByEmail(decoded.email, db);
      if (!user) {
        throw new Error("User not found");
      }

      const isValidPassword = await argon2.verify(user.password, oldPassword);
      if (!isValidPassword) {
        throw new Error("Invalid password");
      }

      const argonHash = await argon2.hash(newPassword);
      await db.query(`UPDATE user SET password = ? WHERE id = ?`, [argonHash, user.id]);

      return true;
    },
  },
};

export default resolvers;
