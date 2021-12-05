import * as argon2 from "argon2";

import User from "../../models/User";
import sendVerifyEmail from "../../utils/sendVerificationMail";
import { createUsername } from "../../utils/stringNormalization";
import { createToken } from "../../utils/token";

const resolvers = {
  Query: {},
  Mutation: {
    createSportsman: async (_, args, { db }) => {
      const { email, password, name, surname } = args;
      const accref = "sportsman_id";

      let user = await User.getUserByEmail(email, db);

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
        await User.createUser({ email, password }, { db });
        user = await User.getUserByEmail(email, db);
        sendVerifyEmail(email, createToken({ id: user.id, email: user.email }));
      }

      await User.updateAccRef({ user, ref: sportsman, accref }, { db });

      return true;
    },
  },
};

export default resolvers;
