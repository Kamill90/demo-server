const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");
const { Query } = require("./graphql/queries");
const { Mutation } = require("./graphql/mutations");
const { User, Post } = require("./graphql/types");

const resolvers = {
  Query,
  Mutation,
  Post,
  User
};

const server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers,
  context: {
    prisma
  }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
