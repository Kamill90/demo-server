import * as jwt from 'jsonwebtoken';

const clientSecret = 'qwe123gdfs324';

interface Request {
  request: any,
}

const getUserId = (request: Request): any => {
  const header = request.request.headers.authorization;

  if (!header) {
    throw new Error('Authorization is required');
  }

  const token = header.replace('Bearer ', '');
  const { userId } = jwt.verify(token, clientSecret) as { userId: string }
  return userId
};

export default getUserId;
