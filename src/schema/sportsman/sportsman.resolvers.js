import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import { SUPABASE_IMG_STORAGE_OBJECT } from "../../consts";

import User from "../../models/User";
import { createDicebearAvatar } from "../../utils/createDicebearAvatar";
import sendVerifyEmail from "../../utils/sendVerificationMail";
import { createUsername } from "../../utils/stringNormalization";
import { supabase } from "../../utils/supabaseClient";
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

        const supabaseAvatarImg = await supabase.storage
          .from(SUPABASE_IMG_STORAGE_OBJECT)
          .upload(`${user.email}/${username}/avatar.svg`, createDicebearAvatar(username), {
            contentType: "image/svg+xml",
          });
      }

      await User.updateAccRef({ user, ref: sportsman, accref }, { db });

      return true;
    },
    updateSportsman: async (_, args, { db }) => {
      const { token, name, surname, phone, street, number, city, region, state, zip } = args;
      const { id, email, sportsman } = jwt.verify(token, process.env.JWT_SECRET);
      db.query(
        `UPDATE sportsman SET name = ?, surname = ?, phone = ?, street = ?, number = ?, city = ?, region = ?, state = ?, zip = ? WHERE id = ${sportsman}`,
        [name, surname, phone, street, number, city, region, state, zip],
      );
      return true;
    },
  },
};

export default resolvers;
