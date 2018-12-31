const Query = {
  getAllUsers(root, args, contex, info) {
    console.log('contex', contex);
    return contex.prisma.query.users(null, info);
  },
};

module.exports = { Query };
