import dotenv from "dotenv-flow";
import express from "express";
import cors from "cors";
import mariadb from "mariadb";
import cookieParser from "cookie-parser";
import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { typeDefs, rootResolver } from "./schema";
import verifyEmail from "./middleware/verifyEmail.middleware";

dotenv.config();

const main = async () => {
  const app = express();

  app.disable("x-powered-by");
  app.use(cors());
  app.use(cookieParser());

  const db = await mariadb
    .createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })
    .catch((err) => {
      throw new Error(err);
    });

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: rootResolver,
    formatError: (error) => {
      console.log(error);
      return error;
    },
    context: async ({ req, res }) => {
      const auth = req.headers.Authorization || "";

      return {
        req,
        res,
        db,
        auth,
      };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  const port = process.env.PORT || 4000;

  // ? this handeler expects jwt token as secret in path in this format: { id: user.id }
  app.get("/verify-account/:secret", verifyEmail);

  app.get("/", (_, res) => res.redirect("/graphql"));

  app.listen(port, () => {
    console.info(`Server started at http://localhost:${port}/graphql`);
  });
};

main();
