//  Address Models
export async function getAddress(id, db) {
  const address = await db.query("SELECT * FROM address WHERE id = ?", [id]);
  return address[0];
}

export async function getPhoto(id, db) {
  const photo = await db.query("SELECT * FROM photo WHERE id = ?", [id]);
  return photo[0];
}
