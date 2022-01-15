import Sportsman from "./sportsman.models";

export function getSportsman(_, args, { db }) {
  const { username } = args;
  const sportsman = Sportsman.getSportsman(username, db);

  return sportsman;
}
