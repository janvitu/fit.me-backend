import User from "../../models/User";
import { createUsername } from "../../utils/stringNormalization";

const resolvers = {
  Query: {},
  Mutation: {
    createSportsground: async (_, args, { db }) => {
      const { name, street, city, zip, country, email, password, vat_number } = args;
      const accref = "sports_ground_id";
      let user = User.getUserByEmail(email, db);

      if (user && user[accref]) {
        throw new Error("User already exists");
      }

      const username = createUsername(name);
      await db.query("INSERT INTO sports_ground (name, username, vat_number) VALUES (?, ?, ?)", [
        name,
        username,
        vat_number,
      ]);
      const sportsground = (
        await db.query("SELECT * FROM sports_ground where username = ?", [username])
      )[0];

      if (!user) {
        await User.createUser({ email, password }, { db });
        user = await User.getUserByEmail(email, db);
        sendVerifyEmail(email, createToken({ id: user.id, email: user.email }));
      }

      await User.updateAccRef({ user, ref: sportsground, accref }, { db });

      return true;
    },
    updateSportsground: async (_, args, { db, auth }) => {
      const {
        name,
        openning_hours_from,
        openning_hours_to,
        web,
        phone,
        description,
        cover_photo_url,
        street,
        number,
        city,
        region,
        state,
        zip,
      } = args;
      const decoded = jwt.verify(auth, process.env.JWT_SECRET);
      db.query(
        `UPDATE sports_ground SET name = ?, openning_hours_from = ?, openning_hours_to = ?, web = ?, phone = ?, description = ?, cover_photo_url = ?, street = ?, number = ?, city = ?, region = ?, state = ?, zip = ? WHERE id = ${decoded.sportsground}`,
        [
          name,
          openning_hours_from,
          openning_hours_to,
          web,
          phone,
          description,
          cover_photo_url,
          street,
          number,
          city,
          region,
          state,
          zip,
        ],
      ).catch((err) => {
        throw new Error(err);
      });

      return true;
    },
  },
};

export default resolvers;
