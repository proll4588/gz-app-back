import { convertTask } from '../../../../entities/task/convert';
import { createTask } from '../../../../entities/task/task';
import { CreateTaskresolverFunction } from './type';

export const resolveCreateTask: CreateTaskresolverFunction = async (
  _,
  args
) => {
  const createdTask = await createTask(args);
  const convertedTask = convertTask(createdTask);
  return convertedTask;
};
