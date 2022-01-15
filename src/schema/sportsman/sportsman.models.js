import { getPhoto } from "../index.models";

export const getSportsman = async (id, db) => {
  const sportsman = (await db.query("SELECT * FROM sportsman WHERE id = ?", [id]))[0];
  const profile_photo = await getPhoto(sportsman.profile_photo_id, db);

  return { ...sportsman, profile_photo };
};

export default {
  get: getSportsman,
};
