import { GraphQLError } from 'graphql';
import { MyContext } from '../../apollo';
import { ResolversFun, ResolversFunArgs } from '../type';

export abstract class RequestResolver<Args, Return, Parent = unknown> {
  constructor() {}

  abstract handle(args: Args, context?: MyContext): Promise<Return>;
  abstract resolve(...args: ResolversFunArgs<Args, Parent>): Promise<Return>;
}

export const authOnly = (
  target: Object,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<ResolversFun<any, any>>
) => {
  const fun = descriptor.value;

  if (fun) {
    descriptor.value = (...args: ResolversFunArgs<any>) => {
      const userId = args[2].userId;
      if (!userId) {
        throw new GraphQLError('User is not authenticated', {
          extensions: {
            code: 'UNAUTHENTICATED',
            http: { status: 401 },
          },
        });
      }

      const res = fun.apply(this, args);
      return res;
    };
  }

  return descriptor;
};
