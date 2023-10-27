import { GraphQLError } from 'graphql';
import { ResolversFun, ResolversFunArgs } from '../type';

export const authOnly = (fun: ResolversFun<any, any>) => {
  return (...args: ResolversFunArgs<any, any>) => {
    const userId = args[2].userId;
    if (!userId) {
      throw new GraphQLError('User is not authenticated', {
        extensions: {
          code: 'UNAUTHENTICATED',
          http: { status: 401 },
        },
      });
    }

    return fun(...args);
  };
};
