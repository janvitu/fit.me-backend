import { gql } from "apollo-server-core";

export default gql`
  type Query {
    userSignIn(email: String!, password: String!, accType: String): UserResponse
    refreshToken(token: String!): String
    getUser(email: String!): User
    getUserByToken(token: String!): User
  }
  type Mutation {
    forgotenPassword(email: String!): Boolean
    resetPassword(newPassword: String!, passwordResetHash: String!): Boolean
    changePassword(token: String!, oldPassword: String!, newPassword: String!): Boolean
  }
  type UserResponse {
    user: User
    token: String!
  }
  type User {
    id: ID!
    email: String!
    verified: Boolean!
    sportsground: Sportsground
    coach: Coach
    sportsman: Sportsman
  }
`;
