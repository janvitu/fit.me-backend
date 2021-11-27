import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Mutation {
    createSportsman(name: String!, surname: String!, email: String!, password: String!): Boolean!
  }
`;

export default typeDefs;
