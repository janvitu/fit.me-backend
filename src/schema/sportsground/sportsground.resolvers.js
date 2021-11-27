import { createUser, getUserByEmail, updateAccRef } from "../../models/User";
import { createUsername } from "../../utils/stringNormalization";

const resolvers = {
  Query: {},
  Mutation: {
    createSportsground: async (_, args, { db }) => {
      const { name, street, city, zip, country, email, password, vat_number } = args;
      const accref = "sports_ground_id";
      let user = getUserByEmail(email, db);

      if (user && user[accref]) {
        throw new Error("User already exists");
      }

      const username = createUsername(name);
      const sportsground = await db.query(
        "INSERT INTO sports_ground (name, username, vat_number) VALUES (?, ?, ?)",
        [name, username, vat_number],
      );

      if (!user) {
        user = await createUser({ email, password }, { db });
      }

      await updateAccRef({ user, ref: sportsground, accref }, { db });

      return true;
    },
  },
};

export default resolvers;
