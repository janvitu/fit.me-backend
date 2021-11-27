import argon2 from "argon2";
import { getUserByEmail } from "../../models/User";
import { createToken } from "../../utils/token";

const resolvers = {
  Query: {
    userSignIn: async (_, args, { db }) => {
      const { email, password, accType = "sportsman" } = args;

      const user = await getUserByEmail(email, db);

      if (!user) {
        throw new Error("User not found");
      }

      if (!user[`${accType}_id`]) {
        throw new Error(`User does not have account type of '${accType}'`);
      }

      const isValidPassword = await argon2.verify(user.password, password);

      if (!isValidPassword) {
        throw new Error("Invalid password");
      }

      const token = createToken({ id: user.id, email: user.email });
      return {
        token: token,
        user: { ...user },
      };
    },
  },
  Mutation: {},
};

export default resolvers;
