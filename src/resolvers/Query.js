const getUserId = require('../utils');

const Query = {
  getAllUsers(root, args, { prisma }, info) {
    return prisma.query.users(null, info);
  },
  async getMe(root, args, { prisma, request }, info) {
    const userId = getUserId(request);
    const user = await prisma.query.user({
      where: {
        id: userId,
      },
    }, info);

    return user;
  },
  getSomething() {
    return 'something';
  },
};

module.exports = { Query };
