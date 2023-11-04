import { DeleteTaskArgs, ResponseTask } from '../../../../entities/task/type';
import { ResolversFun } from '../../../type';

export type DeleteTaskResolverFunction = ResolversFun<
  DeleteTaskArgs,
  ResponseTask
>;
