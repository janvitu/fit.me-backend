import mariadb from "mariadb";
import { verifyUserEmail } from "../models/User";
import { verifyToken } from "../utils/token";

/* 
TODO: figure out how to pass database connection to the middleware
*/
export default async function verifyEmail(req, res, next) {
  const db = await mariadb
    .createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })
    .catch((err) => {
      throw new Error(err);
    });
  const secret = req.params.secret;
  const decoded = verifyToken(secret);

  await verifyUserEmail(decoded, { db }).catch(() => {
    res.status(400).json({
      message: "Unable to verify",
    });
  });

  db.end();
  res.status(200).json({
    message: "OK",
  });
}
