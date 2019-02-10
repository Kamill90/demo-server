import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

interface Request {
  request: any,
}

const getUserId = (request: Request): any => {
  const header = request.request.headers.authorization;

  if (!header) {
    throw new Error('Authorization is required');
  }

  const token = header.replace('Bearer ', '');
  const { userId } = jwt.verify(token, JWT_SECRET) as { userId: string }
  return userId
};

export default getUserId;
