import { getAddress, getPhoto } from "../index.models";

export async function getSportsground(id, db) {
  const sportsground = (await db.query("SELECT * FROM sports_ground WHERE id = ?", [id]))[0];
  const address = await getAddress(sportsground.address_id, db);
  const profile_photo = await getPhoto(sportsground.profile_photo_id, db);

  return {
    ...sportsground,
    address,
    profile_photo,
  };
}

export async function getSportsgroundByUsername(username, db) {
  const sportsground = (
    await db.query("SELECT * FROM sports_ground WHERE username = ?", [username])
  )[0];
  const address = await getAddress(sportsground.address_id, db);
  const profile_photo = await getPhoto(sportsground.profile_photo_id, db);

  return {
    ...sportsground,
    address,
    profile_photo,
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

export async function createSportsground(name, username, vat_number, db) {
  await db.query("INSERT INTO sports_ground (name, username, vat_number) VALUES (?, ?, ?)", [
    name,
    username,
    vat_number,
  ]);
}

export async function removeSportsgroundTag(sportsground_id, tag_id, db) {
  await db.query(
    `DELETE FROM sports_ground_tag WHERE sports_ground_id = ${sportsground_id} AND tag_id = ${tag_id}`,
  );

  return true;
}

export async function getSportsgroundTagByName(tagName, db) {
  const tag = await db.query("SELECT * FROM tag where name = ?", [tagName]);
  return tag[0];
}

export async function addSportsgroundTag(sportsground_id, tag_id, db) {
  await db.query(
    `INSERT INTO sports_ground_tag (sports_ground_id, tag_id) VALUES (${sportsground_id}, ${tag_id})`,
  );
  return true;
}

export async function updateProfilePhotoReference(profileImgId, sportsgroundId, db) {
  await db.query("UPDATE sports_ground SET profile_photo_id = ? WHERE id = ?", [
    profileImgId,
    sportsgroundId,
  ]);
}

export async function updateAddressReference(sportsgroundId, addressId, db) {
  await db.query(`UPDATE sports_ground SET address_id = ? WHERE id = ${sportsgroundId}`, [
    addressId,
  ]);
}

export default {
  get: getSportsground,
  getByUsername: getSportsgroundByUsername,
  getAll: getSportsgrounds,
  getTags: getSportsgroundTags,
  getReviews: getSportgroundReviews,
  create: createSportsground,
  removeTag: removeSportsgroundTag,
  getTagByName: getSportsgroundTagByName,
  addTag: addSportsgroundTag,
  updateProfilePhotoReference,
  updateAddressReference,
};
