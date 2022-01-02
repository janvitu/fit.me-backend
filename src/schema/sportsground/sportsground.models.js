export const getSportsground = async (id, db) => {
  const sportsground = db.query("SELECT * FROM sports_ground WHERE id = ?", [id])[0];
  const sportsgroundAddress = db.query("SELECT * FROM address WHERE id = ?", [
    sportsground.address_id,
  ])[0];

  return {
    ...sportsground,
    address: {
      ...sportsgroundAddress,
    },
  };
};

export default {
  getSportsground,
};
