import { createUsername } from "../../utils/stringNormalization";
import User from "../user/user.models";
import sendVerifyEmail from "../../utils/sendVerificationMail";
import coachQuery from "./coach.query";
import coachMutation from "./coach.mutation";

const resolvers = {
  Query: {
    ...coachQuery,
  },
  Mutation: {
    ...coachMutation,
  },
};

export default resolvers;
