import { prisma } from '../../prisma/prisma';

export const getUserPools = async (userId: number) => {
  const pools = await prisma.pool.findMany({
    where: {
      user_id: userId,
    },
  });

  return pools;
};

interface createPoolProps {
  userId: number;
  title: string;
  dateCreate?: number | null;
}
export const createPool = async ({
  userId,
  title,
  dateCreate,
}: createPoolProps) => {
  const dateedDateStart = dateCreate ? new Date(dateCreate) : new Date();

  const newPool = await prisma.pool.create({
    data: {
      date_create: dateedDateStart,
      user_id: userId,
      title: title,
    },
  });

  return newPool;
};

export const deletePool = async (poolId: number) => {
  const deletedPool = await prisma.pool.delete({
    where: {
      id: poolId,
    },
  });

  return deletedPool;
};
