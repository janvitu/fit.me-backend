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

export default {
  get: getCoach,
  getByUsername: getCoachByUsername,
  getAll: getCoaches,
};
