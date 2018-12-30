const Query = {
  getAllUsers(root, args, context) {
    return context.prisma.users();
  },
};

module.exports = { Query };
