import { SUPABASE_STORAGE_PATH } from "../../consts";

import User from "../user/user.models";
import Coach from "./coach.models";
import { createUsername } from "../../utils/stringNormalization";
import jwt from "jsonwebtoken";
import { updateAddress, insertAddress, uploadPhoto } from "../index.models";
import { supabaseUploadAvatarImage } from "../../utils/supabase/avatarUpload";

async function createCoach(_, args, { db, mailer, supabase }) {
  const { name, surname, vat_number, email, password } = args;
  const accountReference = "coach_id";

  let user = await User.getByEmail(email, db);
  if (user && user[accountReference]) {
    throw new Error("Email already exists");
  }

  const username = createUsername(name + surname);
  const insertCoach = await Coach.create(name, surname, username, vat_number, db);
  const coachId = insertCoach.insertId;
  if (!user) {
    await User.createUser({ email, password }, { db });
    user = await User.getByEmail(email, db);
    sendVerifyEmail(mailer, email, createToken({ id: user.id, email: user.email }));
  }

  const supabaseAvatarImgRes = await supabaseUploadAvatarImage("coach", username, supabase);
  console.log(supabaseAvatarImgRes);
  const photo = {
    location: `${SUPABASE_STORAGE_PATH}${supabaseAvatarImgRes.data.Key}`,
    name: "avatar",
  };
  const avatarImgDatabaseRef = await uploadPhoto(photo, db);
  await Coach.updateProfilePhotoReference(avatarImgDatabaseRef.insertId, coachId, db);

  await User.updateAccountReference({ user, ref: coachId, accountReference }, { db });

  return true;
}

async function updateCoach(_, args, { db }) {
  const {
    token,
    name,
    surname,
    phone,
    vat_number,
    intro_text,
    specialization,
    description,
    cover_photo,
    profile_photo,
  } = args;
  if (!token) {
    throw new Error("No token provided");
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    throw new Error("Invalid token");
  }
  const coach = await Coach.get(decoded.coach, db);
  await db.query(
    `UPDATE coach SET name = ?, surname = ?, phone = ?, vat_number = ?, intro_text = ?, specialization = ?, description = ?, published = ? WHERE id = ${decoded.coach}`,
    [name, surname, phone, vat_number, intro_text, specialization, description, 1],
  );

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
