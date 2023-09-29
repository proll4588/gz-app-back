import jwt from 'jsonwebtoken';

const secret = process.env.SECRET as string;

export const signJWT = (data: object, liveTime: string | number) => {
  return jwt.sign(data, secret, { expiresIn: liveTime });
};
