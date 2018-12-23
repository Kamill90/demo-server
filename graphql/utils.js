const jwt = require("jsonwebtoken");
const { clientSecret } = require("../assets/secrets");

const getUserId = request => {
  const header = request.request.headers.authorization;

  if (!header) {
      throw new Error('Authorization is required')
  }

  const token = header.split(" ")[1];
  const decoded = jwt.verify(token, clientSecret);
  
  return decoded.user.id;
};

module.exports = getUserId