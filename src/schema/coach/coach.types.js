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
      vat_number: String!
      email: String!
      password: String
    ): Boolean
    updateCoach(
      token: String!
      name: String!
      surname: String!
      phone: String!
      vat_number: String!
      intro_text: String!
      specialization: String!
      description: String!
      street: String!
      no: String!
      city: String!
      zip_code: String!
      region: String!
      state: String!
      cover_photo: Upload
      profile_photo: Upload
    ): Boolean
    addReviewCoach(stars: Int!, comment: String!, coach_id: Int!, token: String!): Boolean
  }
  type Coach {
    id: ID!
    username: String!
    name: String!
    surname: String!
    published: Boolean!
    vat_number: String
    phone: String
    address: Address
    specializations: [String]
    intro_text: String
    reqirements: [String]
    description: String
    cover_photo_id: ID
    profile_photo_id: ID
    rating: String
    reviews: [Review]
    details: [BusinessDetail]
    profile_photo: Photo
  }
`;

export default typeDefs;
