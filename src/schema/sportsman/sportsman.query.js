import Sportsman from "./sportsman.models";

export async function getSportsman(_, args, { db }) {
  const { id } = args;
  const sportsman = await Sportsman.get(id, db);

  return sportsman;
}

export default {
  getSportsman,
};
