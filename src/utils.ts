import * as jwt from 'jsonwebtoken';

const clientSecret = 'qwe123gdfs324';

const getUserId = (request) => {
  const header = request.request.headers.authorization;

  if (!header) {
    throw new Error('Authorization is required');
  }

  const token = header.replace('Bearer ', '');
  const decoded = jwt.verify(token, clientSecret);
  return decoded.user.id;
};

export default getUserId;
