import { MyContext } from '../../apollo';
import { ResolversFun } from '../type';

export abstract class RequestResolver<Args, Return, Parent = unknown> {
  constructor() {}

  abstract handle(args: Args, context?: MyContext): Return;
  abstract resolve: ResolversFun<Args, Return, Parent>;
}
