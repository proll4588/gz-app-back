import { convertTask } from '../../../../entities/task/convert';
import { updateTask } from '../../../../entities/task/task';
import { UpdateTaskResolverFunction } from './type';

export const resolveUpdateTask: UpdateTaskResolverFunction = async (
  _,
  args
) => {
  const updatedTask = await updateTask(args);
  const convertedTask = convertTask(updatedTask);
  return convertedTask;
};
