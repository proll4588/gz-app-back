import { CreatePoolResolverFunction } from './type';
import { convertPool } from '../../../../entities/pool/convert';
import { createPool } from '../../../../entities/pool/pool';

const handleCreatePool = async (userId: number, month: number | null) => {
  const createdPool = await createPool({ userId, month });
  const convPool = convertPool(createdPool);

  return convPool;
};

export const resolveCreatePool: CreatePoolResolverFunction = async (
  _,
  { month },
  contextValue
) => {
  const userId = contextValue.userId as number;
  return await handleCreatePool(userId, month);
};
