export const getSportsman = async (id, db) => {
  const sportsman = await db.query("SELECT * FROM sportsman WHERE id = ?", [id]);
  const sportsmanAddress = await db.query("SELECT * FROM address WHERE id = ?", [id]);

  return {
    ...sportsman,
    address: {
      ...sportsmanAddress,
    },
  };
};

export default {
  getSportsman,
};
