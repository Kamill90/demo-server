const jwt = require("jsonwebtoken");
const { clientSecret } = require("../assets/secrets");

const getUserId = requst => {
  const header = requst.requst.headers.authorization;

  if (!header) {
      throw new Error('Authorization is required')
  }

  const token = header.split(" ")[1];
  const decoded = jwt.verify(token, clientSecret);
  console.log("decoded", decoded);
  return decoded.userId;
};

module.exports = getUserId