import { ResponsePool } from '../../../../entities/pool/type';
import { ID } from '../../../../shared/commonTypes';
import { ResolversFun } from '../../../type';

export type DeletePoolResolverFunction = ResolversFun<
  DeletePoolArgs,
  ResponsePool
>;

export interface DeletePoolArgs {
  poolId: ID;
}
