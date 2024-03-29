const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUserId = require('../utils');

const clientSecret = 'qwe123gdfs324';

const Mutation = {
  async createUser(root, { email, name, password }, { prisma }) {
    if (password.length < 8) {
      throw new Error('Password must be at lease 8 characters long');
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.mutation.createUser({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return {
      user,
      token: jwt.sign({ user }, clientSecret),
    };
  },
  async login(root, { email, password }, { prisma }) {
    const user = await prisma.query.user({ where: { email } });
    if (!user) {
      throw new Error('there is no user with this mail address');
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error('wrong password');
    }

    return {
      user,
      token: jwt.sign({ user }, clientSecret),
    };
  },
  async updateUser(root, { name }, { prisma, request }) {
    const userId = getUserId(request);

    const user = await prisma.mutation.updateUser({
      data: { name },
      where: { id: userId },
    });

    return user;
  },
  async createPost(root, { title }, { prisma, request }) {
    const userId = getUserId(request);
    if (!userId) {
      throw new Error('authorization is required');
    }

    const post = await prisma.mutation.createPost({
      data: {
        title,
      },
    });
    return post;
  },
};

module.exports = { Mutation };
