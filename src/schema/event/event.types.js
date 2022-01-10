import { gql } from "apollo-server-core";

const typeDefs = gql`
  type Query {
    getEvent(id: ID!): Event
    getEvents: [Event]
  }
`;

export default typeDefs;
