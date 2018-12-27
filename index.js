const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const { Query } = require('./graphql/queries');
const { Mutation } = require('./graphql/mutations');

const resolvers = {
  Query,
  Mutation,
};

const server = new GraphQLServer({
  typeDefs: './graphql/schema.graphql',
  resolvers,
  context(request) {
    return {
      prisma,
      request,
    };
  },
});
server.start(() => console.log('Server is running on http://localhost:4000'));
