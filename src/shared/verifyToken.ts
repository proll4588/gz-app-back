import jwt from 'jsonwebtoken';
import { ID, Token } from './commonTypes';

export const verifyToken = (token: Token) => {
  const privateKey = process.env.ACCESS_TOKEN_PRIVATE_KEY as string;
  const tokenDetails = jwt.verify(token, privateKey) as { userId: ID };

  return tokenDetails;
};
