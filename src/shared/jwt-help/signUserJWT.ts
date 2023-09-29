import { ID } from '../commonTypes';
import { signJWT } from './signJWT';

export const signUserJWT = (userId: ID) => {
  return signJWT({ id: userId }, '24h');
};
