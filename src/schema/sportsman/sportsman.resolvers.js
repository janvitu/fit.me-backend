import sportsmanMutation from "./sportsman.mutation";

const resolvers = {
  Query: {
    // getSportsman: async (_, args, { db }) => {
    //   const { id } = args;
    //   const sportsman = await db.query("SELECT * FROM sportsman WHERE id = ?", [id]);
    //   return sportsman[0];
    // },
  },
  Mutation: {
    ...sportsmanMutation,
  },
};

export default resolvers;
