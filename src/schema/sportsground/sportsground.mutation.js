import { SUPABASE_STORAGE_PATH } from "../../consts";

import User from "../user/user.models";
import Sportsground from "./sportsground.models";
import { createToken } from "../../utils/token";
import { createUsername } from "../../utils/stringNormalization";
import sendVerifyEmail from "../../utils/sendVerificationMail";

import jwt from "jsonwebtoken";
import { insertAddress, updateAddress, uploadPhoto } from "../index.models";
import { supabaseUploadAvatarImage } from "../../utils/supabase/avatarUpload";

async function createSportsground(_, args, { db, mailer, supabase }) {
  const { name, street, number, city, zip, country, email, password, vat_number } = args;
  const accountReference = "sports_ground_id";

  let user = await User.getByEmail(email, db);
  if (user && user[accountReference]) {
    throw new Error("User already exists");
  }

  const username = createUsername(name);
  const insertSportsground = await Sportsground.create(name, username, vat_number, db);
  const sportsgroundId = insertSportsground.insertId;
  const address = await insertAddress({
    street,
    no: number,
    city,
    zip_code: zip,
    region: null,
    country,
  });
  const addressId = address.insertId;
  await Sportsground.updateAddressReference(sportsgroundId, addressId, db);

  if (!user) {
    await User.createUser({ email, password }, { db });
    user = await User.getByEmail(email, db);
    sendVerifyEmail(mailer, email, createToken({ id: user.id, email: user.email }));
  }

  const supabaseAvatarImgRes = await supabaseUploadAvatarImage("sportsground", username, db);
  const photo = {
    location: `${SUPABASE_STORAGE_PATH}${supabaseAvatarImgRes.data.Key}`,
    name: "avatar",
  };
  const avatarImgDatabaseRef = await uploadPhoto(photo, db);
  await Sportsground.updateProfilePhotoReference(avatarImgDatabaseRef.insertId, sportsgroundId, db);

  await User.updateAccountReference({ user, ref: sportsgroundId, accountReference }, { db });

  return true;
}

async function updateSportsground(_, args, { db }) {
  const {
    token,
    intro_text,
    name,
    openning_hours_from,
    openning_hours_to,
    web,
    phone,
    vat_number,
    description,
    address,
    cover_photo,
    profile_photo,
    tags,
  } = args;
  if (!token) {
    throw new Error("No token provided");
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    throw new Error("Invalid token");
  }
  const sportsground = await Sportsground.get(decoded.sportsground, db);

  // prettier-ignore
  await db.query(
    `UPDATE sports_ground SET name = ?, published = ?, intro_text = ?, openning_hours_from = ?, openning_hours_to = ?, web = ?, phone = ?, vat_number = ?, description = ? WHERE id = ${decoded.sportsground}`,
    [name, 1, intro_text, openning_hours_from, openning_hours_to, web, phone, vat_number, description],
  );
  await updateAddress(address, sportsground.address_id, db);

  const sportstgroundTags = await Sportsground.getTags(sportsground.id, db);
  const tagIds = tags.map((tag) => {
    const id = Sportsground.getTagByName(tag.name, db);
    return id;
  });
  sportstgroundTags.forEach(async (tag) => {
    if (!tagIds.includes(tag.id)) {
      await Sportsground.removeTag(decoded.sportsground, tag.id, db);
    }
  });
  tagIds.forEach(async (tagId) => {
    if (!sportstgroundTags.map((tag) => tag.id).includes(tagId)) {
      await Sportsground.addTag(decoded.sportsground, tagId, db);
    }
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

  return true;
}

export default {
  createSportsground,
  updateSportsground,
  addReviewSportsground,
};
