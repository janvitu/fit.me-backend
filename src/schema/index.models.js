//  Address Models
async function getAddress(id, db) {
  const address = await db.query("SELECT * FROM address WHERE id = ?", [id])[0];
  return address;
}
