import { resolveCreatePool } from './requests/create-pool/createPool';
import { authOnly } from './libs/authOnly';
import { resolveGetPool } from './requests/get-pool';
import { resolveDeletePool } from './requests/delete-pool';
import { resolveUpdatePool } from './requests/update-pool';

export const resolvers = {
  Query: {
    getPool: authOnly(resolveGetPool),
  },
  Mutation: {
    createPool: authOnly(resolveCreatePool),
    deletePool: authOnly(resolveDeletePool),
    updatePool: authOnly(resolveUpdatePool),
  },
};
