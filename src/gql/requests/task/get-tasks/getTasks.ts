import { convertTask } from '../../../../entities/task/convert';
import { getTasks } from '../../../../entities/task/task';
import { GetTasksResolverFunction } from './type';

export const resolveGetTasks: GetTasksResolverFunction = async (_, args) => {
  const tasks = await getTasks(args);
  const convertedTasks = tasks.map(convertTask);
  return convertedTasks;
};
