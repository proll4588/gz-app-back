import { prisma } from '../../prisma/prisma';
import { ID } from '../../shared/commonTypes';
import {
  CreateTaskArgs,
  DeleteTaskArgs,
  GetTasksArgs,
  UpdateTaskArgs,
} from './type';

/* == CREATE == */
export const createTask = async (args: CreateTaskArgs) => {
  const { endDate, poolId, startDate, title } = args;

  const datedStartDate = startDate ? new Date(startDate) : undefined;
  const datedEndDate = endDate ? new Date(endDate) : undefined;

  const newTask = await prisma.tasks.create({
    data: {
      pool_id: poolId,
      title,
      end_date: datedEndDate,
      start_date: datedStartDate,
    },
  });

  return newTask;
};
/* ===== */

/* == GET == */
export const getTasks = async (args: GetTasksArgs) => {
  const task = await prisma.tasks.findMany({
    where: { pool_id: args.poolId },
  });

  return task;
};
/* ===== */

/* == DELETE == */
export const deleteTask = async (args: DeleteTaskArgs) => {
  const deletedTask = await prisma.tasks.delete({
    where: { id: args.taskId },
  });

  return deletedTask;
};
/* ===== */

/* == UPDATE == */
export const updateTask = async (args: UpdateTaskArgs) => {
  const { endDate, startDate, taskId, title } = args;

  const newTitle = title || undefined;
  const newStartDate = startDate ? new Date(startDate) : undefined;
  const newEndDate = endDate ? new Date(endDate) : undefined;

  const updatedTask = await prisma.tasks.update({
    where: { id: taskId },
    data: {
      title: newTitle,
      start_date: newStartDate,
      end_date: newEndDate,
    },
  });

  return updatedTask;
};
/* ===== */
