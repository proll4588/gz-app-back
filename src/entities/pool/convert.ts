import { DBPool, ResponsePool } from './type';

export const convertPool = (dbPool: DBPool): ResponsePool => {
  const { date_complite, date_create, id, is_complite, title, user_id } =
    dbPool;

  return {
    id,
    title,
    dateComplite: date_complite?.getTime() || null,
    dateCreate: date_create.getTime(),
    isComplite: is_complite,
    userId: user_id,
  };
};
