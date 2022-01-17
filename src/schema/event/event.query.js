import Sportsground from "../sportsground/sportsground.models";
import Event from "./event.models";

async function getEvent(_, args, { db }) {
  const { id } = args;
  const event = await Event.get(id, db);
  const tags = await Event.getTags(id, db);
  const exercises = await Event.getExercises(id, db);
  const sportsmans = await Event.getSportsmans(id, db);
  const numOfRegistered = await sportsmans.length;
  const difficulty = await Event.getDifficulty(event.difficulty_id, db);
  const sportsground = await Sportsground.get(event.sports_ground_id, db);
  return {
    ...event,
    tags,
    exercises,
    sportsmans,
    difficulty,
    sportsground,
    numOfRegistered,
  };
}

async function getEvents(_, args, { db }) {
  const events = await Event.getAll(db);

  const eventsFull = events.map(async (event) => {
    if (event.sports_ground_id) {
      const exercises = await Event.getExercises(event.id, db);
      const sportsmans = await Event.getSportsmans(event.id, db);
      const numOfRegistered = await sportsmans.length;
      const tags = await Event.getTags(event.id, db);
      const difficulty = await Event.getDifficulty(event.difficulty_id, db);
      const sportsground = await Sportsground.get(event.sports_ground_id, db);
      return {
        ...event,
        sportsmans,
        tags,
        exercises,
        difficulty,
        sportsground,
        numOfRegistered,
      };
    }
  });
  return eventsFull;
}

export default {
  getEvent,
  getEvents,
};
