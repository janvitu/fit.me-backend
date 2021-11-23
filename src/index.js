import dotenv from "dotenv-flow";
import express from "express";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { getConnection } from "./libs/connection";

import rootResolver from "./modules/rootResolver";

dotenv.config();

const typeDefs = gql`
	type Query {
		todo: String!
	}
	type Sportsman {
		name: String!
		surname: String!
		email: String!
		password: String!
		phone: String
	}
	type AuthInfo {
		sportsman: Sportsman!
		token: String!
	}
	type Mutation {
		sportsmanSignIn(email: String!, password: String!): AuthInfo!
		sportsmanSignUp(
			name: String!
			surname: String!
			email: String!
			password: String!
			secondPassword: String!
		): Boolean
		coachSignUp(
			name: String!
			surname: String!
			email: String!
			password: String!
			secondPassword: String!
			vat_number: String
		): Boolean
		sportsgroundSignUp(
			name: String!
			address: {
				street: String!
				city: String!
				zip: String!
				country: String
			}
			phone: String
			email: String!
			password: String!
			secondPassword: String!
			vat_number: String
		): Boolean
	}
`;

const main = async () => {
	const app = express();

	app.disable("x-powered-by");
	app.use(cors());

	let dbConnection = null;

	const apolloServer = new ApolloServer({
		typeDefs,
		resolvers: rootResolver,
		formatError: (error) => {
			console.log(error);
			return error;
		},
		context: async ({ req, res }) => {
			if (!dbConnection) {
				dbConnection = await getConnection();
			}
			const auth = req.headers.Authorization || "";

			return {
				req,
				res,
				dbConnection,
				auth,
			};
		},
		plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({ app, cors: false });

	const port = process.env.PORT || 4000;

	app.get("/", (_, res) => res.redirect("/graphql"));

	app.listen(port, () => {
		console.info(`Server started at http://localhost:${port}/graphql`);
	});
};

main();
