import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    getEvent(id: ID!): Event
    getEvents: [Event]
  }
  type Exercise {
    id: ID!
    name: String!
    icon: String
  }
  type Event {
    id: ID!
    name: String!
    description: String!
    datetime_from: Float
    datetime_to: Float
    datetime_created: Float
    sportsground: Sportsground
    tags: [Tag]
    exercises: [Exercise]
    sportsmans: [Sportsman]
    difficulty: String
    numOfRegistered: Int
  }
`;

export default typeDefs;
