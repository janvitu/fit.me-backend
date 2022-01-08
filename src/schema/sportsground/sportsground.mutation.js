import User from "../user/user.models";
import Sportgsground from "./sportsground.models";
import { createToken } from "../../utils/token";
import { createUsername } from "../../utils/stringNormalization";
import sendVerifyEmail from "../../utils/sendVerificationMail";

import jwt from "jsonwebtoken";

async function createSportsground(_, args, { db }) {
  const { name, street, city, zip, country, email, password, vat_number } = args;
  const accref = "sports_ground_id";
  let user = User.getUserByEmail(email, db);

  if (user && user[accref]) {
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
    sendVerifyEmail(email, createToken({ id: user.id, email: user.email }));
  }

  await User.updateAccRef({ user, ref: sportsground, accref }, { db });

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
      console.log(err);
    });

  return true;
}

export default {
  createSportsground,
  updateSportsground,
};
