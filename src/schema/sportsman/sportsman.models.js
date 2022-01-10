export const getSportsman = async (id, db) => {
  const sportsman = await db.query("SELECT * FROM sportsman WHERE id = ?", [id]);

  return sportsman[0];
};

export default {
  get: getSportsman,
};
