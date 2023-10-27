import { convertPool } from '../../../entities/pool/convert';
import { getUserPools } from '../../../entities/pool/pool';
import { GetPoolResolverFuction } from './type';

const handleGetPool = async (userId: number) => {
  const dbPools = await getUserPools(userId);
  const convPools = dbPools.map(convertPool);

  return convPools;
};

export const resolveGetPool: GetPoolResolverFuction = async (
  _,
  {},
  contextValue
) => {
  const userId = contextValue.userId as number;
  return await handleGetPool(userId);
};
