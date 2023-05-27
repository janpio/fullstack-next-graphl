import "reflect-metadata";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
// import { gql } from "graphql-tag"; // sorry no need in typegraphql
import { buildSchema } from "type-graphql";
import { resolvers as resolver } from "../../../resolver/index";

// kind of fascinating in oop(class based). it can be done using normal way but i like typegraphql way
const createServerHandler = async () => {
  const schema = await buildSchema({
    resolvers: [...resolver],
    validate: false,
    emitSchemaFile: true,
  });

  const server = new ApolloServer({
    schema: schema,
  });
  const handler = startServerAndCreateNextHandler(server);
  return handler;
};

//* can be done using top level await by putting in next config - kind of lazy :)
export async function GET(request: Request) {
  const handler = await createServerHandler();
  return handler(request);
}

export async function POST(request: Request) {
  const handler = await createServerHandler();
  return handler(request);
}
