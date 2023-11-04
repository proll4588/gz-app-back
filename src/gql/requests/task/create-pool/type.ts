import { ResponsePool } from '../../../../entities/pool/type';
import { ResolversFun } from '../../../type';

export type CreatePoolResolverFunction = ResolversFun<
  CreatePoolArgs,
  ResponsePool
>;

export interface CreatePoolArgs {
  month: number | null;
}
