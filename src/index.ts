import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';

import { resolvers } from './resolvers';

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'https://demo-server-db-fb6ed0d759.herokuapp.com/prisma-demo-server-db/dev',
    secret: 'qwe123gdfs324',
    debug: false,
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
