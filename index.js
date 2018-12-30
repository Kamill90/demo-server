const { GraphQLServer } = require('graphql-yoga');

const { prisma } = require('./src/prisma');
const { Query } = require('./src/resolvers/Query');
const { Mutation } = require('./src/resolvers/Mutation');

const resolvers = {
  Query,
  Mutation,
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context(request) {
    return {
      prisma,
      request,
    };
  },
});
server.start(() => console.log('Server is running on http://localhost:4000'));
