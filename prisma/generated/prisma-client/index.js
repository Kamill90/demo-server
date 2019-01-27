"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: `https://demo-server-db-fb6ed0d759.herokuapp.com/prisma-demo-server-db/dev`,
  secret: `qwe123gdfs324`
});
exports.prisma = new exports.Prisma();
