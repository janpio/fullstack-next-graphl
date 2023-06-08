import "reflect-metadata";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { resolvers } from "@/server/resolver";

const schema = await buildSchema({
  resolvers: [...resolvers],
  validate: false,
  emitSchemaFile: true,
});

const server = new ApolloServer({
  schema: schema,
});

export default startServerAndCreateNextHandler(server);
