import { resolvers as UserResolvers } from "./user";
import { resolvers as CoachResolvers } from "./coach";
import { resolvers as SportsgroundResolvers } from "./sportsground";
import { resolvers as SportsmanResolvers } from "./sportsman";
import { resolvers as EventResolvers } from "./event";
import { merge } from "lodash";
import { GraphQLUpload } from "graphql-upload";

const rootResolver = merge(
  {
    Upload: GraphQLUpload,
  },
  UserResolvers,
  CoachResolvers,
  SportsgroundResolvers,
  SportsmanResolvers,
  EventResolvers,
);

export default rootResolver;
