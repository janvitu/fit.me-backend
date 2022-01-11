import { typeDefs as CoachTypeDefs } from "./coach";
import { typeDefs as UserTypeDefs } from "./user";
import { typeDefs as SportsgroundTypeDefs } from "./sportsground";
import { typeDefs as SportsmanTypeDefs } from "./sportsman";
import { gql } from "apollo-server-core";

const tempTypeDef = gql`
  type Address {
    id: ID
    street: String
    no: Int
    city: String
    region: String
    state: String
    zip_code: Int
  }
  type Tag {
    name: String
    color: String
  }
  type Event {
    id: ID!
    name: String!
    description: String!
    datetime_from: String!
    datetime_to: String
    datetime_created: String!
    cover_photo_id: Int
    sports_ground_id: Int!
    coach_id: Int
    sportground: Sportsground
    coach: Coach
  }
  type Review {
    id: ID!
    stars: Int!
    comment: String!
    datetime: String!
    sportsman_id: Int!
    sportsman: Sportsman
  }
  type BusinessDetail {
    title: String
    value: String
  }
  type Sportsground {
    id: ID!
    name: String!
    username: String!
    address_id: ID!
    address: Address!
    description: String
    tags: [Tag]
    rating: String
    reviews: [Review]
    events: [Event]
    details: [BusinessDetail]
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
    reqirements: [String]
    description: String
    cover_photo_id: ID
    profile_photo_id: ID
    rating: String
    reviews: [Review]
    details: [BusinessDetail]
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
