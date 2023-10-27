import { resolveCreatePool } from './requests/create-pool/createPool';
import { authOnly } from './libs/authOnly';
import { resolveGetPool } from './requests/get-pool';

export const resolvers = {
  Query: {
    getPool: authOnly(resolveGetPool),
  },
  Mutation: {
    createPool: authOnly(resolveCreatePool),
  },
};
