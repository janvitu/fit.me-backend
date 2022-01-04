import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    getCoach(username: String!): Coach
    getCoaches: [Coach]
  }
  type Mutation {
    createCoach(
      name: String!
      surname: String!
      vat_number: Int!
      email: String!
      password: String!
    ): Boolean
    updateCoach(
      name: String
      surname: String
      phone: String
      vat_number: Int
      street: String
      number: Int
      city: String
      region: String
      state: String
      zip: String
      description: String
      specializations: [String]
    ): Boolean
  }
`;

export default typeDefs;
