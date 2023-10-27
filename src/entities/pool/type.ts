import { Prisma } from '@prisma/client';

export interface ResponsePool {
  id: number;
  userId: number;
  title: string;
  dateCreate: number;
  dateComplite: number | null;
  isComplite: boolean;
}

export type DBPool = Prisma.poolGetPayload<{}>;
