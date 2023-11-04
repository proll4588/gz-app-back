import { convertPool } from '../../../../entities/pool/convert';
import { deletePool } from '../../../../entities/pool/pool';
import { ID } from '../../../../shared/commonTypes';
import { DeletePoolResolverFunction } from './type';

export const handleDeletePool = async (poolId: ID) => {
  const deletedPool = await deletePool(poolId);
  const cobvertedDeletedPool = convertPool(deletedPool);
  return cobvertedDeletedPool;
};

export const resolveDeletePool: DeletePoolResolverFunction = async (
  _,
  { poolId }
) => {
  return await handleDeletePool(poolId);
};
