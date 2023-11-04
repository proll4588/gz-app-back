import { prisma } from '../../prisma/prisma';
import { ID } from '../../shared/commonTypes';

/* == GET == */
export const getUserPools = async (userId: number) => {
  const pools = await prisma.pool.findMany({
    where: { user_id: userId },
  });

  return pools;
};
/* ===== */

/* == CREATE == */
interface CreatePoolParams {
  userId: number;
  month: number | null;
}
export const createPool = async ({ userId, month }: CreatePoolParams) => {
  const monthDate = month ? new Date(month) : new Date();

  const newPool = await prisma.pool.create({
    data: {
      month: monthDate,
      user_id: userId,
    },
  });

  return newPool;
};
/* ===== */

/* == DELETE == */
export const deletePool = async (poolId: number) => {
  // TODO: при удалении пула, сначала удаляем задачи
  const deletedPool = await prisma.pool.delete({
    where: {
      id: poolId,
    },
  });

  return deletedPool;
};
/* ===== */

/* == UPDATE == */
interface UpdatePoolParams {
  poolId: number;
  month: number | null;
  status: boolean | null;
}
export const updatePool = async ({
  month,
  poolId,
  status,
}: UpdatePoolParams) => {
  const newMonth = month ? new Date(month) : undefined;
  const newStatus = status ? status : undefined;

  const updatedPool = await prisma.pool.update({
    where: {
      id: poolId,
    },
    data: {
      month: newMonth,
      is_complite: newStatus,
    },
  });

  return updatedPool;
};
/* ===== */
