export const getCoach = async (id, db) => {
  const coach = await db.query("SELECT * FROM coach WHERE id = ?", [id])[0];

  return coach;
};

export const getByUsername = async (username, db) => {
  const coach = await db.query("SELECT * FROM coach WHERE username = ?", [username])[0];

  return coach;
};

export const getAll = async (db) => {
  const coaches = await db.query("SELECT * FROM coach");

  return coaches;
};

export default {
  getCoach,
  getByUsername,
  getAll,
};
