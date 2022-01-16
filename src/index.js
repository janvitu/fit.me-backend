import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mariadb from "mariadb";
import { createClient } from "@supabase/supabase-js";

import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { graphqlUploadExpress } from "graphql-upload";

import nodemailer from "nodemailer";
import { typeDefs, rootResolver } from "./schema";
import verifyEmail from "./middleware/verifyEmail.middleware";

const main = async () => {
  const app = express();

  dotenv.config();

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

  const mailer = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.G_USER,
      pass: process.env.G_PASS,
    },
  });

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: rootResolver,
    formatError: (error) => {
      console.error(error);
      return error;
    },
    context: async ({ req, res }) => {
      const auth = req.cookies.token || "";

      return {
        req,
        res,
        db,
        mailer,
        supabase,
        auth,
      };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();
  app.use(graphqlUploadExpress());
  apolloServer.applyMiddleware({ app, cors: false });

  const port = process.env.PORT || 4000;

  /**
   * ? this handeler expects jwt token as secret in path /verify-account/:token
   *  token should be in format { id: user_id, email: user_email }
   */
  app.get(
    "/verify-account/:token",
    (req, res, next) => {
      req.db = db;
      next();
    },
    verifyEmail,
  );

  app.get("/", (_, res) => res.redirect("/graphql"));

  app.listen(port, () => {
    console.info(`Server started at http://localhost:${port}/graphql`);
  });
};

main();
