import { getPhoto } from "../index.models";

export async function getSportsman(id, db) {
  const sportsman = (await db.query("SELECT * FROM sportsman WHERE id = ?", [id]))[0];
  const profile_photo = await getPhoto(sportsman.profile_photo_id, db);

  return { ...sportsman, profile_photo };
}

export async function createSportsman(name, surname, username, db) {
  const sportsmanRef = await db.query(
    "INSERT INTO sportsman (name, surname, username) VALUES (?, ?, ?)",
    [name, surname, username],
  );
  return sportsmanRef;
}

export async function updateProfilePhotoReference(profileImgId, sportsmanId, db) {
  await db.query("UPDATE sportsman SET profile_photo_id = ? WHERE id = ?", [
    profileImgId,
    sportsmanId,
  ]);
}

export default {
  get: getSportsman,
  create: createSportsman,
  updateProfilePhotoReference,
};
