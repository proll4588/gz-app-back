import { Prisma } from '@prisma/client';

export interface ResponsePool {
  id: number;
  userId: number;
  month: number;
  isComplite: boolean;
}

export type DBPool = Prisma.poolGetPayload<{}>;
