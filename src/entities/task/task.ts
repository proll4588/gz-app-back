import { prisma } from '../../prisma/prisma';
import { ID } from '../../shared/commonTypes';
import { CreateTaskArgs } from './type';

/* == CREATE == */

export const createTask = async (params: CreateTaskArgs) => {
  const { endDate, poolId, startDate, title } = params;

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
export const getTasks = async (poolId: ID) => {
  const task = await prisma.tasks.findMany({
    where: { pool_id: poolId },
  });

  return task;
};
/* ===== */

/* == DELETE == */
export const deleteTask = async (taskId: ID) => {
  const deletedTask = await prisma.tasks.delete({
    where: { id: taskId },
  });

  return deletedTask;
};
/* ===== */

/* == UPDATE == */
interface UpdateTaskParams {
  taskId: ID;
  title: string | null;
  startDate: number | null;
  endDate: number | null;
}
export const updateTask = async (params: UpdateTaskParams) => {
  const { endDate, startDate, taskId, title } = params;

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
