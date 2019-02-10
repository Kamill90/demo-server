import * as jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

interface Request {
  headers: any,
}

const getUserId = (request: Request): any => {
  const header = request.headers.authorization;

  if (!header) {
    throw new Error('Authorization is required');
  }

  const token = header.replace('Bearer ', '');
  const { user } = jwt.verify(token, JWT_SECRET) as {
    user: {
      id: string
    }
  }
  return user.id
};

export default getUserId;
