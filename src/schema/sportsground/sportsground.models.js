import { getAddress } from "../index.models";

export async function getSportsground(id, db) {
  const sportsground = db.query("SELECT * FROM sports_ground WHERE id = ?", [id])[0];
  const sportsgroundAddress = await getAddress(sportsground.address_id, db);

  return {
    ...sportsground,
    address: {
      ...sportsgroundAddress,
    },
  };
}

export async function getSportsgroundByUsername(username, db) {
  const sportsground = (
    await db.query("SELECT * FROM sports_ground WHERE username = ?", [username])
  )[0];

  const sportsgroundAddress = await getAddress(sportsground.address_id, db);

  return {
    ...sportsground,
    address: {
      ...sportsgroundAddress,
    },
  };
  return;
}

export async function getSportsgrounds(db) {
  const sportsgrounds = await db.query("SELECT * FROM sports_ground");

  return sportsgrounds;
}

export async function getSportsgroundTags(sportsground_id, db) {
  const tags = await db.query(
    "SELECT name, color FROM sport LEFT JOIN service_sports_ground ON sport.id=service_sports_ground.service_id WHERE service_sports_ground.sports_ground_id = ?",
    [sportsground_id],
  );
  return tags.map((tag) => {
    return { name: tag.name, color: tag.color };
  });
}

export async function getSportgroundReviews(sportsground_id, db) {
  const reviews = await db.query("SELECT * FROM review WHERE sports_ground_id = ?", [
    sportsground_id,
  ]);

  return reviews;
}

export default {
  get: getSportsground,
  getByUsername: getSportsgroundByUsername,
  getAll: getSportsgrounds,
  getTags: getSportsgroundTags,
  getReviews: getSportgroundReviews,
};
