import { createUsername } from "../../utils/stringNormalization";
import User from "../../models/User";
import sendVerifyEmail from "../../utils/sendVerificationMail";

const resolvers = {
  Query: {},
  Mutation: {
    createCoach: async (_, args, { db }) => {
      const { name, surname, vat_number, email, password } = args;
      const accref = "coach_id";

      let user = await User.getUserByEmail(email, db);

      if (user && user[accref]) {
        throw new Error("Email already exists");
      }

      const username = createUsername(name + surname);
      await db.query(
        "INSERT INTO coach (name, surname, username, vat_number) VALUES (?, ?, ?, ?)",
        [name, surname, username, vat_number],
      );
      const coach = (await db.query("SELECT * FROM coach where username = ?", [username]))[0];

      if (!user) {
        await User.createUser({ email, password }, { db });
        user = await User.getUserByEmail(email, db);
        sendVerifyEmail(email, createToken({ id: user.id, email: user.email }));
      }

      await User.updateAccRef({ user, ref: coach, accref }, { db });

      return true;
    },
    updateCoach: async (_, args, { db }) => {
      const {
        token,
        name,
        surname,
        phone,
        vat_number,
        street,
        number,
        city,
        region,
        state,
        zip,
        description,
        specializations,
      } = args;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      db.query(
        "UPDATE coach SET name = ?, surname = ?, phone = ?, vat_number = ?, street = ?, number = ?, city = ?, region = ?, state = ?, zip = ?, description = ?, specializations = ? WHERE id = ?",
        [
          name,
          surname,
          phone,
          vat_number,
          street,
          number,
          city,
          region,
          state,
          zip,
          description,
          specializations,
          decoded.coach,
        ],
      ).catch((err) => {
        console.log(err);
      });

      return true;
    },
  },
};

export default resolvers;
