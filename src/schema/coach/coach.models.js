import { getPhoto } from "../index.models";

export const getCoach = async (id, db) => {
  const coach = await db.query("SELECT * FROM coach WHERE id = ?", [id])[0];
  const profile_photo = await getPhoto(coach.profile_photo_id, db);

  return { ...coach, profile_photo };
};

export const getCoachByUsername = async (username, db) => {
  const coach = (await db.query("SELECT * FROM coach WHERE username = ?", [username]))[0];
  const profile_photo = await getPhoto(coach.profile_photo_id, db);

  return { ...coach, profile_photo };
};

export const getCoaches = async (db) => {
  const coaches = await db.query("SELECT * FROM coach");

  return coaches;
};

export async function getCoachReviews(id, db) {
  const reviews = await db.query("SELECT * FROM review WHERE coach_id = ?", [id]);

  return reviews;
}

export default {
  get: getCoach,
  getByUsername: getCoachByUsername,
  getAll: getCoaches,
  getReviews: getCoachReviews,
};
