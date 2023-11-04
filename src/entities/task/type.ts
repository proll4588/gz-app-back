import { Prisma } from '@prisma/client';
import { ID } from '../../shared/commonTypes';

export interface ResponeTask {
  id: ID;
  poolId: ID;
  title: string;
  startDate: number | null;
  endDate: number | null;
}

export type DBTask = Prisma.tasksGetPayload<{}>;
