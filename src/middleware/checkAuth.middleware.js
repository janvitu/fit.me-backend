import { verifyToken } from "../utils/token";

export default function (req, res, next) {
  const token = req.cookies.fitme_token;
  if (!token) {
    return res.status(401).json({
      status: 401,
      error: "You are not logged in",
    });
  }
  try {
    const decoded = verifyToken(token);
    req.user_id = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      status: 401,
      error: "You are not logged in",
    });
  }
}
