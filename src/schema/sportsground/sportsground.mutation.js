import User from "../user/user.models";
import Sportgsground from "./sportsground.models";
import { createToken } from "../../utils/token";
import { createUsername } from "../../utils/stringNormalization";
import sendVerifyEmail from "../../utils/sendVerificationMail";

import jwt from "jsonwebtoken";

async function createSportsground(_, args, { db, mailer }) {
  const { name, street, city, zip, country, email, password, vat_number } = args;
  const accountReference = "sports_ground_id";
  let user = User.getUserByEmail(email, db);

  if (user && user[accountReference]) {
    throw new Error("User already exists");
  }

  const username = createUsername(name);
  await db.query("INSERT INTO sports_ground (name, username, vat_number) VALUES (?, ?, ?)", [
    name,
    username,
    vat_number,
  ]);
  const sportsground = Sportgsground.getByUsername(username, db);

  if (!user) {
    await User.createUser({ email, password }, { db });
    user = await User.getUserByEmail(email, db);
    sendVerifyEmail(mailer, email, createToken({ id: user.id, email: user.email }));
  }

  await User.updateAccountReference({ user, ref: sportsground, accountReference }, { db });

  return true;
}

async function updateSportsground(_, args, { db }) {
  const {
    token,
    name,
    openning_hours_from,
    openning_hours_to,
    web,
    phone,
    description,
    cover_photo_url,
    street,
    number,
    city,
    region,
    state,
    zip,
  } = args;
  if (!token) {
    throw new Error("No token provided");
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    throw new Error("Invalid token");
  }
  await db
    .query(
      `UPDATE sports_ground SET name = ?, openning_hours_from = ?, openning_hours_to = ?, web = ?, phone = ?, description = ?, cover_photo_url = ?, street = ?, number = ?, city = ?, region = ?, state = ?, zip = ? WHERE id = ${decoded.sportsground}`,
      [
        name,
        openning_hours_from,
        openning_hours_to,
        web,
        phone,
        description,
        cover_photo_url,
        street,
        number,
        city,
        region,
        state,
        zip,
      ],
    )
    .catch((err) => {
      console.error(err);
    });

  return true;
}

async function addReviewSportsground(_, args, { db }) {
  const { token, stars, comment, sportsground_id } = args;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!token) {
    throw new Error("No token provided");
  }
  if (!decoded) {
    throw new Error("Invalid token");
  }
  await db
    .query(
      "INSERT INTO review (stars, comment,  sportsman_id, sports_ground_id) VALUES (?,?,?,?)",
      [stars, comment, decoded.sportsman, sportsground_id],
    )
    .catch((err) => {
      console.log(err);
    });
  console.log([stars, comment, decoded.sportsman, sportsground_id]);
  return true;
}

export default {
  createSportsground,
  updateSportsground,
  addReviewSportsground,
};
