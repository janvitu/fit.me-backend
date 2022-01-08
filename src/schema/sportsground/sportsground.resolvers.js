import sportsgroundQuery from "./sportsground.query";
import sportsgroundMutation from "./sportsground.mutation";

const resolvers = {
  Query: {
    ...sportsgroundQuery,
  },
  Mutation: {
    ...sportsgroundMutation,
  },
};

export default resolvers;
