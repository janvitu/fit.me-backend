import { gql } from "apollo-server-core";

export default gql`
  type UserResponse {
    user: User
    token: String!
  }
  type Query {
    userSignIn(email: String!, password: String!, accType: String): UserResponse
    getUser(email: String!): User
  }
  type Mutation {
    forgotenPassword(email: String!): Boolean
    resetPassword(newPassword: String!, passwordResetHash: String!): Boolean
    changePassword(oldPassword: String!, newPassword: String!): Boolean
  }
`;
