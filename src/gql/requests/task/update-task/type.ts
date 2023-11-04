import { ResponseTask, UpdateTaskArgs } from '../../../../entities/task/type';
import { ResolversFun } from '../../../type';

export type UpdateTaskResolverFunction = ResolversFun<
  UpdateTaskArgs,
  ResponseTask
>;
