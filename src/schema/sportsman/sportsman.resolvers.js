import sportsmanMutation from "./sportsman.mutation";

const resolvers = {
  Query: {},
  Mutation: {
    ...sportsmanMutation,
  },
};

export default resolvers;
