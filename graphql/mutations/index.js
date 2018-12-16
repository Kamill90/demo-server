const { prisma } = require("../../generated/prisma-client");
const bcrypt = require('bcrypt')

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
  async createUser (root, args, context){
    let { password } = args
    if (password.length < 8) {
      throw new Error('Password must be at lease 8 characters long')
    }
    password = await bcrypt.hash(password, 10)
    console.log(password)

    return context.prisma.createUser({
      name: args.name,
      password: args.password
    });
  }
};

module.exports = { Mutation };
