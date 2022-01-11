export const getCoach = async (id, db) => {
  const coach = await db.query("SELECT * FROM coach WHERE id = ?", [id])[0];

  return coach;
};

export const getCoachByUsername = async (username, db) => {
  const coach = await db.query("SELECT * FROM coach WHERE username = ?", [username]);

  return coach[0];
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
