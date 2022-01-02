export const getCoach = async (id, db) => {
  const coach = await db.query("SELECT * FROM coach WHERE id = ?", [id])[0];

  return coach;
};

export default {
  getCoach,
};
