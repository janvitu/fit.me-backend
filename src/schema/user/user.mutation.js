import { sendPasswordResetEmail } from "../../utils/sendPasswordResetEmail";
import User from "./user.models";

async function forgotenPassword(_, args, { db, mailer }) {
  const { email } = args;
  const user = await User.getByEmail(email, db);

  if (!user) {
    throw new Error("User not found");
  }

  const lostPasswordHash = (Math.random() + 1).toString(36).substring(2);

  await db
    .query(`UPDATE user SET password_reset_hash = ? WHERE id = ?`, [lostPasswordHash, user.id])
    .catch((err) => {
      throw new Error(err);
    });

  sendPasswordResetEmail(mailer, email, lostPasswordHash);

  return true;
}

async function resetPassword(_, args, { db }) {
  const { newPassword, passwordResetHash } = args;
  let user = (
    await db.query(`SELECT * FROM user WHERE password_reset_hash = ?`, [passwordResetHash])
  )[0];

  if (!user) {
    throw Error("User with given hash does not exist.");
  }

  let argonHash = await argon2.hash(newPassword);
  await db.query("UPDATE user SET password = ?, password_reset_hash = ? WHERE id = ?", [
    argonHash,
    null,
    user.id,
  ]);

  return true;
}

async function changePassword(_, args, { db }) {}

export default {
  forgotenPassword,
  resetPassword,
  changePassword,
};
