import { DBTask, ResponseTask } from './type';

export const convertTask = (dbTask: DBTask): ResponseTask => {
  const { end_date, id, pool_id, start_date, title } = dbTask;
  return {
    id,
    title,
    poolId: pool_id,
    startDate: start_date?.getTime() || null,
    endDate: end_date?.getTime() || null,
  };
};
