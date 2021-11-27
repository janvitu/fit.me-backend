import * as argon2 from "argon2";

import { createUser, getUserByEmail, updateAccRef } from "../../models/User";
import { createUsername } from "../../utils/stringNormalization";

const resolvers = {
  Query: {},
  Mutation: {
    createSportsman: async (_, args, { db }) => {
      const { email, password, name, surname } = args;
      const accref = "sportsman_id";

      let user = (await db.query("SELECT * FROM user WHERE email = ?", [email]))[0];

      if (user && user[accref]) {
        throw new Error("User already exists");
      }

      const username = createUsername(name + surname);
      await db.query("INSERT INTO sportsman (name, surname, username) VALUES (?, ?, ?)", [
        name,
        surname,
        username,
      ]);
      const sportsman = (
        await db.query("SELECT * FROM sportsman where username = ?", [username])
      )[0];

      if (!user) {
        await createUser({ email, password }, { db });
        user = await getUserByEmail(email, db);
      }

      await updateAccRef({ user, ref: sportsman, accref }, { db });

      return true;
    },
  },
};

export default resolvers;
