import { resolvers } from './gql/resolvers';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as dotenv from 'dotenv';
import { typeDefs } from './gql/schema';
import { apolloContext } from './apollo/context';
import { MyContext } from './apollo/type';

dotenv.config();

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

// @ts-ignore
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: apolloContext,
});

console.log(`🚀  Server ready at: ${url}`);
