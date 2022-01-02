// import mariadb from "mariadb";
import { verifyUserEmail } from "../schema/user/user.models";
import { verifyToken } from "../utils/token";

export default async function verifyEmail(req, res) {
  const db = req.db;
  const secret = req.params.secret;
  const decoded = verifyToken(secret);

  await verifyUserEmail(decoded, { db }).catch(() => {
    res.status(400).json({
      message: "Unable to verify",
    });
  });

  res.redirect(process.env.REDIRECT_URL);
}
