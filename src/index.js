import "./utils/dotenvContext.js";
import express from "express";
import cors from "cors";
import mariadb from "mariadb";
import { supabase } from "./utils/supabaseClient";

import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/pixel-art-neutral";

import cookieParser from "cookie-parser";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { typeDefs, rootResolver } from "./schema";
import verifyEmail from "./middleware/verifyEmail.middleware";

const main = async () => {
  const app = express();

  app.disable("x-powered-by");
  app.use(
    cors({
      origin: "*",
      credentials: true,
    }),
  );
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

  // const svg = createAvatar(style, {
  //   name: "username",
  // });

  // const res = await supabase.storage
  //   .from("fitme-imgs")
  //   .upload("public/avatar.svg", svg, {
  //     contentType: "image/svg+xml",
  //   })
  //   .then(({ data, error }) => {
  //     if (!error) {
  //       console.log(data.Key);
  //       console.log(`${supabase.storage.url}/object/public/${data.Key}`);
  //     }
  //     console.log(error);
  //   });

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: rootResolver,
    formatError: (error) => {
      console.log(error);
      return error;
    },
    context: async ({ req, res }) => {
      const auth = req.cookies.token || "";

      return {
        req,
        res,
        db,
        supabase,
        auth,
      };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  const port = process.env.PORT || 4000;

  // ? this handeler expects jwt token as secret in path in this format: { id: user.id, email: user.email }
  app.get("/verify-account/:secret", verifyEmail);

  app.get("/", (_, res) => res.redirect("/graphql"));

  app.listen(port, () => {
    console.info(`Server started at http://localhost:${port}/graphql`);
  });
};

main();
