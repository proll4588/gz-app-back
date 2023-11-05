import { dateToUnix } from '../../shared/dateToUnix';
import { DBTask, ResponseTask } from './type';

export const convertTask = (dbTask: DBTask): ResponseTask => {
  const { end_date, id, pool_id, start_date, title } = dbTask;

  const startDateData = start_date ? dateToUnix(start_date) : null;
  const endDateData = end_date ? dateToUnix(end_date) : null;

  return {
    id,
    title,
    poolId: pool_id,
    startDate: startDateData,
    endDate: endDateData,
  };
};
