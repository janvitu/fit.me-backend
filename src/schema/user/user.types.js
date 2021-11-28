import { gql } from "apollo-server-core";

export default gql`
  type User {
    id: ID!
    email: String!
    verified: Boolean!
    coach_id: ID
    sportsman_id: ID
    sports_group_id: ID
  }
  type UserResponse {
    user: User
    token: String!
  }
  type Query {
    userSignIn(email: String!, password: String!, accType: String): UserResponse
  }
  type Mutation {
    resetPassword(email: String!, originPassword: String!, newPassword: String!): Boolean
  }
`;
