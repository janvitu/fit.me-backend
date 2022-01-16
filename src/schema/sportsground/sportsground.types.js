import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    getSportsground(username: String!): Sportsground
    getSportsgrounds: [Sportsground]
  }
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
      token: String!
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
    addReviewSportsground(
      stars: Int!
      comment: String
      sportsman_id: Int
      sportsground_id: Int
      token: String!
    ): Boolean
  }
  type Sportsground {
    id: ID!
    name: String!
    username: String!
    address_id: ID
    address: Address
    description: String
    intro_text: String
    tags: [Tag]
    rating: String
    reviews: [Review]
    events: [Event]
    details: [BusinessDetail]
    profile_photo: Photo
  }
`;

export default typeDefs;
