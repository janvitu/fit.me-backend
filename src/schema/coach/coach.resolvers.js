import { createUsername } from "../../utils/stringNormalization";
import User from "../../models/User";

const resolvers = {
  Query: {},
  Mutation: {
    createCoach: async (_, args, { db }) => {
      const { name, surname, vat_numbrer, email, password } = args;
      const accref = "coach_id";

      const user = await db.query("SELECT * FROM user WHERE email = ?", [email])[0];

      if (user && user[accref]) {
        throw new Error("Email already exists");
      }

      const username = createUsername(name + surname);
      const coach = await db.query(
        "INSERT INTO coach (name, surname, username, vat_number) VALUES (?, ?, ?, ?)",
        [name, surname, username, vat_numbrer],
      );

      if (!user) {
        user = User.createUser({ email, password }, { db });
      }

      await User.updateAccRef({ user, ref: coach, accref }, { db });

      return true;
    },
  },
};

export default resolvers;
