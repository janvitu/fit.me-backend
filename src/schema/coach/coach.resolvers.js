import coachQuery from "./coach.query";
import coachMutation from "./coach.mutation";

const resolvers = {
  Query: {
    ...coachQuery,
  },
  Mutation: {
    ...coachMutation,
  },
};

export default resolvers;
