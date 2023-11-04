import { convertPool } from '../../../entities/pool/convert';
import { updatePool } from '../../../entities/pool/pool';
import { ID } from '../../../shared/commonTypes';
import { UpdatePoolResolverFunction } from './type';

export const handleUpdatePool = async (
  poolId: ID,
  month: number | null,
  status: boolean | null
) => {
  const updatedPool = await updatePool({ poolId, month, status });
  const convertedUpdatedPool = convertPool(updatedPool);
  return convertedUpdatedPool;
};

export const resolveUpdatePool: UpdatePoolResolverFunction = async (
  _,
  { month, poolId, status }
) => {
  return await handleUpdatePool(poolId, month, status);
};
