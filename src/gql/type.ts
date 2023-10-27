import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../apollo/type';

export type ResolversFun<Args, Return, Parent = unknown> = (
  parent: Parent,
  args: Args,
  contextValue: MyContext,
  info: GraphQLResolveInfo
) => Promise<Return>;

export type ResolversFunArgs<Args, Parent = unknown> = [
  Parent,
  Args,
  MyContext,
  GraphQLResolveInfo,
];
