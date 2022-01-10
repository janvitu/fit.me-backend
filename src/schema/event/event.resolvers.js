import eventQueries from "./event.query";

const resolvers = {
  Query: {
    ...eventQueries,
  },
  Mutation: {},
};

export default resolvers;
