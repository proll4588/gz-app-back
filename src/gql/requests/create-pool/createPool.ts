import { CreatePoolResolverFunction } from './type';
import { convertPool } from '../../../entities/pool/convert';
import { createPool } from '../../../entities/pool/pool';

const handleCreatePool = async (
  userId: number,
  title: string,
  dateCreate: number | null
) => {
  const createdPool = await createPool({ userId, title, dateCreate });
  const convPool = convertPool(createdPool);

  return convPool;
};

export const resolveCreatePool: CreatePoolResolverFunction = async (
  _,
  { title, dateCreate },
  contextValue
) => {
  const userId = contextValue.userId as number;
  return await handleCreatePool(userId, title, dateCreate);
};
