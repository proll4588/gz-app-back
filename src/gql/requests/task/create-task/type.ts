import { CreateTaskArgs, ResponseTask } from '../../../../entities/task/type';
import { ResolversFun } from '../../../type';

export type CreateTaskresolverFunction = ResolversFun<
  CreateTaskArgs,
  ResponseTask
>;
