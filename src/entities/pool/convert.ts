import { DBPool, ResponsePool } from './type';

export const convertPool = (dbPool: DBPool): ResponsePool => {
  const { id, is_complite, user_id, month } = dbPool;

  return {
    id,
    month: month.getTime(),
    isComplite: is_complite,
    userId: user_id,
  };
};
