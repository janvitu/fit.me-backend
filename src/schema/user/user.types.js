import { gql } from "apollo-server-core";

export default gql`
  type Address {
    id: ID
    street: String
    number: Int
    city: String
    region: String
    state: String
    zip: String
  }
  type Sportsground {
    id: ID!
    name: String!
    username: String!
    address_id: ID!
    address: Address!
  }
  type Coach {
    id: ID!
    username: String!
    name: String!
    surname: String!
    published: Boolean!
    vat_number: String!
    phone: String
    address: Address
    specializations: [String]
    reqirements: [String]
    description: String
    cover_photo_id: ID
    profile_photo_id: ID
  }
  type Sportsman {
    id: ID!
    username: String!
    name: String!
    surname: String!
    phone: String
    address: Address
  }
  type User {
    id: ID!
    email: String!
    verified: Boolean!
    sportsground: Sportsground
    coach: Coach
    sportsman: Sportsman
  }
  type UserResponse {
    user: User
    token: String!
  }
  type Query {
    userSignIn(email: String!, password: String!, accType: String): UserResponse
    getUser(email: String!): User
  }
  type Mutation {
    forgottenPassword(email: String!): Boolean
    resetPassword(newPassword: String!, passwordResetHash: String!): Boolean
  }
`;
