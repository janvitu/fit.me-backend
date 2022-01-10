import Sportsground from "../sportsground/sportsground.models";
import Event from "./event.models";
import Coach from "../coach/coach.models";

async function getEvent(_, args, { db }) {
  const { id } = args;
  const event = await Event.get(id, db);
  const sportsground = await Sportsground.get(event.sports_ground_id, db);
  const coach = await Coach.get(event.coach_id, db);

  return {
    ...event,
    sportsground: sportsground,
    coach: coach,
  };
}

async function getEvents(_, args, { db }) {
  const events = await Event.getAll(db);

  return events;
}

export default {
  getEvent,
  getEvents,
};
