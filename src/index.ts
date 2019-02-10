import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from 'prisma-binding';

import { resolvers } from './resolvers';

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
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

server.start({ port: process.env.PORT || 4000 }, () => console.log('Server is up'));
