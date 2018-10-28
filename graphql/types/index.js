const { prisma } = require("../../generated/prisma-client");

const User = {
    posts(root, args, context) {
      return context.prisma
        .user({
          id: root.id
        })
        .posts();
    }
  };

const Post = {
    author(root, args, context) {
      return context.prisma
        .post({
          id: root.id
        })
        .author();
    }
  };

module.exports = { User, Post };