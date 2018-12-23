const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { clientSecret } = require("../../assets/secrets");
const getUserId = require("../utils");

const { prisma } = require("../../generated/prisma-client");

const Mutation = {
  createDraft(root, args, context) {
    return context.prisma.createPost({
      title: args.title,
      author: {
        connect: { id: args.userId }
      }
    });
  },
  publish(root, args, context) {
    return context.prisma.updatePost({
      where: { id: args.postId },
      data: { published: true }
    });
  },
  async updateUser(root, { name }, { prisma, request }) {
    const userId = getUserId(request);

    const user = await prisma.updateUser({data: {name}, where: { id: userId}});

    return {
      ...user
    }
  },
  async createUser(root, { email, name, password }, { prisma }) {
    if (password.length < 8) {
      throw new Error("Password must be at lease 8 characters long");
    }
    password = await bcrypt.hash(password, 10);

    const user = await prisma.createUser({
      email,
      name,
      password
    });

    return {
      user,
      token: jwt.sign({ user }, clientSecret)
    };
  },
  async login(root, { email, password }, { prisma }) {
    const user = await prisma.user({ email });

    if (!user) {
      throw new Error("unable to login");
    }
    return {
      user,
      token: jwt.sign({ user }, clientSecret)
    };
  }
};

module.exports = { Mutation };
