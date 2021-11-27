import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Mutation {
    createCoach(
      name: String!
      surname: String!
      vat_number: String!
      email: String!
      password: String!
    ): Boolean
  }
`;

export default typeDefs;
