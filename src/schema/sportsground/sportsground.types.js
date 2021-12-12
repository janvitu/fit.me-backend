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
    updateSportsground(
      name: String
      opening_hours_from: String
      opening_hours_to: String
      web: String
      phone: String
      description: String
      cover_photo_url: String
      profile_photo_url: String
      street: String
      number: Int
      city: String
      region: String
      state: String
      zip: String
    ): Boolean
  }
`;

export default typeDefs;
