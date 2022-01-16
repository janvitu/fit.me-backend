import User from "../user/user.models";
import { createUsername } from "../../utils/stringNormalization";
import jwt from "jsonwebtoken";

async function createCoach(_, args, { db, mailer }) {
  const { name, surname, vat_number, email, password } = args;
  const accountReference = "coach_id";

  let user = await User.getUserByEmail(email, db);

  if (user && user[accountReference]) {
    throw new Error("Email already exists");
  }

  const username = createUsername(name + surname);
  await db.query("INSERT INTO coach (name, surname, username, vat_number) VALUES (?, ?, ?, ?)", [
    name,
    surname,
    username,
    vat_number,
  ]);
  const coach = (await db.query("SELECT * FROM coach where username = ?", [username]))[0];

  if (!user) {
    await User.createUser({ email, password }, { db });
    user = await User.getUserByEmail(email, db);
    sendVerifyEmail(mailer, email, createToken({ id: user.id, email: user.email }));
  }

  await User.updateAccountReference({ user, ref: coach, accountReference }, { db });

  return true;
}

async function updateCoach(_, args, { db }) {
  const {
    token,
    name,
    surname,
    phone,
    vat_number,
    street,
    number,
    city,
    region,
    state,
    zip,
    description,
    specializations,
  } = args;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  db.query(
    "UPDATE coach SET name = ?, surname = ?, phone = ?, vat_number = ?, street = ?, number = ?, city = ?, region = ?, state = ?, zip = ?, description = ?, specializations = ? WHERE id = ?",
    [
      name,
      surname,
      phone,
      vat_number,
      street,
      number,
      city,
      region,
      state,
      zip,
      description,
      specializations,
      decoded.coach,
    ],
  ).catch((err) => {
    console.error(err);
  });

  return true;
}
async function addReviewCoach(_, args, { db }) {
  const { token, stars, comment, coach_id } = args;

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!token) {
    throw new Error("No token provided");
  }
  if (!decoded) {
    throw new Error("Invalid token");
  }
  await db
    .query("INSERT INTO review (stars, comment,  sportsman_id, coach_id) VALUES (?,?,?,?)", [
      stars,
      comment,
      decoded.sportsman,
      coach_id,
    ])
    .catch((err) => {
      console.log(err);
    });

  return true;
}

export default {
  createCoach,
  updateCoach,
  addReviewCoach,
};
