import { resolvers as UserResolvers } from "./user";
import { resolvers as CoachResolvers } from "./coach";
import { resolvers as SportsgroundResolvers } from "./sportsground";
import { resolvers as SportsmanResolvers } from "./sportsman";
import { merge } from "lodash";

const rootResolver = merge(
  UserResolvers,
  CoachResolvers,
  SportsgroundResolvers,
  SportsmanResolvers,
);

export default rootResolver;
