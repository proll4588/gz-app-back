import { GetTasksArgs, ResponseTask } from '../../../../entities/task/type';
import { ResolversFun } from '../../../type';

export type GetTasksResolverFunction = ResolversFun<
  GetTasksArgs,
  ResponseTask[]
>;
