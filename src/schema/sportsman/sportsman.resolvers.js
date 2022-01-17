import sportsmanMutation from "./sportsman.mutation";
import sportsmanQuery from "./sportsman.query";

const resolvers = {
  Query: {
    ...sportsmanQuery,
  },
  Mutation: {
    ...sportsmanMutation,
  },
};

export default resolvers;
