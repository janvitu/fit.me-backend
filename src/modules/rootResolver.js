import { mutations as UserMutations } from "./user";
import { mutations as CoachMutations } from "./coach";

export default {
	Query: {
		todo: async () => {
			return new Date().toISOString();
		},
	},
	Mutation: {
		...UserMutations,
		...CoachMutations,
	},
};
