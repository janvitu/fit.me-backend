import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    getSportsman(id: ID!): Sportsman
  }
  type Mutation {
    createSportsman(name: String!, surname: String!, email: String!, password: String!): Boolean!
    updateSportsman(
      token: String!
      name: String
      surname: String
      phone: String
      street: String
      number: Int
      city: String
      region: String
      state: String
      zip: String
    ): Boolean!
  }
  type Sportsman {
    id: ID!
    username: String!
    name: String!
    surname: String!
    phone: String
    address: Address
    profile_photo: Photo
  }
`;

export default typeDefs;
