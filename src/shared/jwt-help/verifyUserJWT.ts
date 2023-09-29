import { Token } from '../commonTypes';
import jwt from 'jsonwebtoken';

const secret = process.env.SECRET as string;

export const verifyUserJWT = (token: Token) => {
  return jwt.verify(token, secret);
};
