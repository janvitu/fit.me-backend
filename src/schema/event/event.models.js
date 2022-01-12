import { getPhoto } from "../index.models";

export async function getEvents(db) {
  const events = await db.query("SELECT * FROM event");
  return events;
}

export async function getEvent(id, db) {
  const event = await db.query("SELECT * FROM event WHERE id = ?", [id]);
  return event[0];
}

export async function getEventDifficulty(difficulty_id, db) {
  const difficulty = await db.query("SELECT * FROM difficulty WHERE id = ?", [difficulty_id]);
  return difficulty[0].name;
}

export async function getEventTags(event_id, db) {
  const tags = await db.query(
    "SELECT name, color FROM sport LEFT JOIN event_sport ON sport.id=event_sport.sport_id WHERE event_sport.event_id = ?",
    [event_id],
  );
  return tags.map((tag) => {
    return { name: tag.name, color: tag.color };
  });
}

export async function getEventExercises(event_id, db) {
  const exercises = await db.query(
    "SELECT name FROM exercise LEFT JOIN event_exercise ON exercise.id=event_exercise.exercise_id WHERE event_exercise.event_id = ?",
    [event_id],
  );
  return exercises.map((exercise) => {
    return { name: exercise.name };
  });
}

export async function getEventSportsmans(event_id, db) {
  const sportsmans = await db.query(
    "SELECT username, name, surname, profile_photo_id FROM sportsman LEFT JOIN event_sportsman ON sportsman.id=event_sportsman.sportsman_id WHERE event_sportsman.event_id = ?",
    [event_id],
  );
  const sportsmansFull = sportsmans.map((sportsman) => {
    // const profile_photo = await getPhoto(sportsman.profile_photo_id, db);
    return {
      ...sportsman,
      // profile_photo,
    };
  });
  return sportsmansFull;
}

export default {
  getDifficulty: getEventDifficulty,
  getSportsmans: getEventSportsmans,
  getExercises: getEventExercises,
  getTags: getEventTags,
  getAll: getEvents,
  get: getEvent,
};
