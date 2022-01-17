import { SUPABASE_STORAGE_PATH } from "../../consts";
import User from "../user/user.models";
import Sportsman from "./sportsman.models";
import sendVerifyEmail from "../../utils/sendVerificationMail";
import { createUsername } from "../../utils/stringNormalization";
import { createToken, verifyToken } from "../../utils/token";
import { uploadPhoto } from "../index.models.js";
import { supabaseUploadAvatarImage } from "../../utils/supabase/avatarUpload";

async function createSportsman(_, args, { db, mailer, supabase }) {
  const { email, password, name, surname } = args;
  const accountReference = "sportsman_id";

  let user = await User.getByEmail(email, db);
  if (user && user[accountReference]) {
    throw new Error("User already exists");
  }

  const username = createUsername(name + surname);
  const inserSportsman = await Sportsman.create(name, surname, username, db);
  const sportsmanId = inserSportsman.insertId;

  if (!user) {
    await User.create({ email, password }, { db });
    user = await User.getByEmail(email, db);
    sendVerifyEmail(mailer, email, createToken({ id: user.id, email: user.email }));
  }

  const supabaseAvatarImgRes = await supabaseUploadAvatarImage("sportsman", username, supabase);
  const photo = {
    location: `${SUPABASE_STORAGE_PATH}${supabaseAvatarImgRes.data.Key}`,
    name: "avatar",
  };
  const avatarImgDatabaseRef = await uploadPhoto(photo, db);
  await Sportsman.updateProfilePhotoReference(avatarImgDatabaseRef.insertId, sportsmanId, db);

  await User.updateAccountReference({ user, ref: sportsmanId, accountReference }, { db });

  return true;
}
async function updateSportsman(_, args, { db }) {
  const { token, name, surname, phone, street, number, city, region, state, zip } = args;
  const { id, email, sportsman } = verifyToken(token);
  db.query(
    `UPDATE sportsman SET name = ?, surname = ?, phone = ?, street = ?, number = ?, city = ?, region = ?, state = ?, zip = ? WHERE id = ${sportsman}`,
    [name, surname, phone, street, number, city, region, state, zip],
  );
  return true;
}

export default {
  createSportsman,
  updateSportsman,
};
