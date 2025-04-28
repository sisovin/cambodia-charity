import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY || 'defaultSecretKey';

export const authenticateUser = (user: { id: number; email: string }) => {
  const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: '1h',
  });
  return token;
};
