import { ResponsePool } from '../../../../entities/pool/type';
import { ResolversFun } from '../../../type';

export type GetPoolResolverFuction = ResolversFun<GetPoolArgs, ResponsePool[]>;

export interface GetPoolArgs {}
