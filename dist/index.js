"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
var prisma_binding_1 = require("prisma-binding");
var resolvers_1 = require("./resolvers");
var prisma = new prisma_binding_1.Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: false,
});
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: resolvers_1.resolvers,
    context: function (req) { return (__assign({}, req, { prisma: prisma })); },
});
server.start({ port: process.env.PORT || 4000 }, function () { return console.log('Server is up'); });
