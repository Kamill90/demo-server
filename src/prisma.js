const Prisma = require('prisma-binding');

const prisma = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'http://localhost:4466',
  secret: 'qwe123gdfs324',
});

module.exports = prisma;
