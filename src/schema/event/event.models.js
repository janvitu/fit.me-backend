export async function getEvents(db) {
  const events = await db.query("SELECT * FROM event");

  return events;
}

export async function getEvent(id, db) {
  const event = await db.query("SELECT * FROM event WHERE id = ?", [id])[0];

  return event;
}

export default {
  getAll: getEvents,
  get: getEvent,
};
