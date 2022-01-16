import { typeDefs as CoachTypeDefs } from "./coach";
import { typeDefs as UserTypeDefs } from "./user";
import { typeDefs as SportsgroundTypeDefs } from "./sportsground";
import { typeDefs as SportsmanTypeDefs } from "./sportsman";
import { typeDefs as EventTypeDefs } from "./event";
import { gql } from "apollo-server-core";

const tempTypeDef = gql`
  scalar Upload
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
  type Photo {
    id: ID
    name: String
    location: String
  }
  type Review {
    id: ID!
    stars: String!
    comment: String!
    datetime: Float!
    sportsman_id: Int!
    sportsman: Sportsman
  }
  type BusinessDetail {
    title: String
    value: String
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
  EventTypeDefs,
];

export default typeDefs;
