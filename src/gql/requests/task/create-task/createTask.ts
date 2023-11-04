import { convertTask } from '../../../../entities/task/convert';
import { createTask } from '../../../../entities/task/task';
import { CreateTaskResolverFunction } from './type';

export const resolveCreateTask: CreateTaskResolverFunction = async (
  _,
  args
) => {
  const createdTask = await createTask(args);
  const convertedTask = convertTask(createdTask);
  return convertedTask;
};
