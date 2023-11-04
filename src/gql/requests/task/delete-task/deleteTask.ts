import { convertTask } from '../../../../entities/task/convert';
import { deleteTask } from '../../../../entities/task/task';
import { DeleteTaskResolverFunction } from './type';

export const resolveDeleteTask: DeleteTaskResolverFunction = async (
  _,
  args
) => {
  const deletedTask = await deleteTask(args);
  const convertedTask = convertTask(deletedTask);
  return convertedTask;
};
