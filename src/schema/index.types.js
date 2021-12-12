import { typeDefs as CoachTypeDefs } from "./coach";
import { typeDefs as UserTypeDefs } from "./user";
import { typeDefs as SportsgroundTypeDefs } from "./sportsground";
import { typeDefs as SportsmanTypeDefs } from "./sportsman";
import { gql } from "apollo-server-core";

const tempTypeDef = gql`
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
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

const typeDefs = [
  tempTypeDef,
  UserTypeDefs,
  CoachTypeDefs,
  SportsgroundTypeDefs,
  SportsmanTypeDefs,
];

export default typeDefs;
