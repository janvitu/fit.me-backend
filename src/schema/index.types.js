import { typeDefs as CoachTypeDefs } from "./coach";
import { typeDefs as UserTypeDefs } from "./user";
import { typeDefs as SportsgroundTypeDefs } from "./sportsground";
import { typeDefs as SportsmanTypeDefs } from "./sportsman";
import { gql } from "apollo-server-core";

const tempTypeDef = gql`
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
