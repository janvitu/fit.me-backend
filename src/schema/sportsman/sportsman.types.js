import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Mutation {
    createSportsman(name: String!, surname: String!, email: String!, password: String!): Boolean!
    updateSportsman(
      name: String
      surname: String
      phone: String
      street: String
      number: Int
      city: String
      region: String
      state: String
      zip: String
    ): Boolean!
  }
`;

export default typeDefs;
