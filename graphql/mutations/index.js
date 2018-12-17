const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
  async createUser(root, args, context) {
    const SECRET = "qwe123gdfs324";
    let { password } = args;
    if (password.length < 8) {
      throw new Error("Password must be at lease 8 characters long");
    }
    password = await bcrypt.hash(password, 10);

    const user = await context.prisma.createUser({
      name: args.name,
      password: password
    });

    return {
      user,
      token: jwt.sign({ user }, SECRET)
    };
  },
  async login(root, { name, password }, { prisma }, info) {
    const user = await prisma.user({where: {id: "cjprgp9b6xn8s0a00etl2vpn2"}});

    console.log("user", user);
    return user;

    return {
      token: jwt.sign({ user }, SECRET)
    };
  }
};

module.exports = { Mutation };
