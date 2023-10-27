import { ContextFunction } from '@apollo/server';
import { MyContext } from './type';
import { verifyToken } from '../shared/verifyToken';
import { StandaloneServerContextFunctionArgument } from '@apollo/server/dist/esm/standalone';

export const apolloContext: ContextFunction<
  [StandaloneServerContextFunctionArgument],
  MyContext
> = async ({ req, res }) => {
  return new Promise((resolve, reject) => {
    const token = req.headers.authorization || null;

    if (token) {
      try {
        const info = verifyToken(token);

        if (info) resolve({ userId: info.userId });
        else resolve({ userId: null });
      } catch (error) {
        resolve({ userId: null });
      }
    }
  });
};
