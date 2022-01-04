import Coach from "./coach.models";

async function getCoach(_, args, { db }) {
  const { username } = args;
  const coach = await Coach.getByUsername(username, db);
  return coach;
}

async function getCoaches(_, args, { db }) {
  const coaches = await Coach.getAll(db);
  return coaches;
}

export default {
  getCoach,
  getCoaches,
};
