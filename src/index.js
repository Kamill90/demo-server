const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const { resolvers } = require('./resolvers');

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql', // the generated Prisma DB schema
  endpoint: 'https://demo-server-db-fb6ed0d759.herokuapp.com/prisma-demo-server-db/dev', // the endpoint of the Prisma DB service
  secret: 'qwe123gdfs324', // specified in database/prisma.yml
  debug: false, // log all GraphQL queries & mutations
});

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma,
  }),
});

server.start(() => console.log('Server is up'));
