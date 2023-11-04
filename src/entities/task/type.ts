import { Prisma } from '@prisma/client';
import { ID } from '../../shared/commonTypes';

export interface ResponseTask {
  id: ID;
  poolId: ID;
  title: string;
  startDate: number | null;
  endDate: number | null;
}

export type DBTask = Prisma.tasksGetPayload<{}>;

export interface CreateTaskArgs {
  poolId: ID;
  title: string;
  startDate: number | null;
  endDate: number | null;
}

export interface UpdateTaskArgs {
  taskId: ID;
  title: string | null;
  startDate: number | null;
  endDate: number | null;
}

export interface GetTasksArgs {
  poolId: ID;
}

export interface DeleteTaskArgs {
  taskId: ID;
}
