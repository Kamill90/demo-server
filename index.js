const { GraphQLServer } = require('graphql-yoga');

const { prisma } = require('./generated/prisma-client');
const { resolvers } = require('./src/resolvers');

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context(request) {
    return {
      request,
      prisma,
    };
  },
});
server.start({ port: process.env.PORT || 4000 }, () => console.log('Server is up'));
