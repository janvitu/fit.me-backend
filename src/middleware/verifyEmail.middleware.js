// import mariadb from "mariadb";
import { verifyUserEmail } from "../schema/user/user.models";
import { verifyToken } from "../utils/token";

export default async function verifyEmail(req, res) {
  const db = req.db;
  const token = req.params.token;
  const decoded = verifyToken(token);

  await verifyUserEmail(decoded, { db }).catch(() => {
    res.status(400).json({
      message: "Unable to verify",
    });
  });

  res.redirect(process.env.REDIRECT_URL);
}
