import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Mutation {
    createSportsground(
      name: String!
      street: String!
      city: String!
      zip: String!
      country: String!
      email: String!
      password: String!
      vat_number: Int!
    ): Boolean
  }
`;

export default typeDefs;
