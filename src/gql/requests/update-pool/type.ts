import { ResponsePool } from '../../../entities/pool/type';
import { ID } from '../../../shared/commonTypes';
import { ResolversFun } from '../../type';

export type UpdatePoolResolverFunction = ResolversFun<
  UpdatePoolArgs,
  ResponsePool
>;

export interface UpdatePoolArgs {
  poolId: ID;
  month: number | null;
  status: boolean | null;
}
