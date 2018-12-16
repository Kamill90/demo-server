const { prisma } = require("../../generated/prisma-client");

const Query = {
    publishedPosts(root, args, context) {
      return context.prisma.posts({ where: { published: true } });
    },
    post(root, args, context) {
      return context.prisma.post({ id: args.postId });
    },
    getAllUsers(root, args, context) {
      return context.prisma.users();
    },
    getAllPosts(root, args, context) {
      return context.prisma.posts({ where: { published: true } });
    },
    postsByUser(root, args, context) {
      return context.prisma
        .user({
          id: args.userId
        })
        .posts();
    }
  };

module.exports = { Query }