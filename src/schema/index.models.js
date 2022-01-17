export async function getAddress(id, db) {
  const address = await db.query("SELECT * FROM address WHERE id = ?", [id]);
  return address[0];
}

export async function updateAddress(address, address_id, db) {
  await db.query(
    `UPDATE address SET street = ?, no = ?, city = ?, zip_code = ?, region = ?, state = ? WHERE id = ${address_id}`,
    [address.street, address.no, address.city, address.zip_code, address.region, address.state],
  );
}

export async function insertAddress(address, db) {
  const addressRef = await db.query(
    "INSERT INTO address (street, no, city, zip_code, region, state) VALUES (?, ?, ?, ?, ?, ?)",
    [address.street, address.no, address.city, address.zip_code, address.region, address.state],
  );

  return addressRef;
}

export async function getPhoto(id, db) {
  const photo = await db.query("SELECT * FROM photo WHERE id = ?", [id]);
  return photo[0];
}

export async function uploadPhoto(photo, db) {
  const res = await db.query("INSERT INTO photo (location, name) VALUES (?, ?)", [
    photo.location,
    photo.name,
  ]);
  return res;
}
