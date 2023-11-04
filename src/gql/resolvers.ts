import { resolveCreatePool } from './requests/task/create-pool/createPool';
import { authOnly } from './libs/authOnly';
import { resolveGetPool } from './requests/task/get-pool';
import { resolveDeletePool } from './requests/task/delete-pool';
import { resolveUpdatePool } from './requests/task/update-pool';

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
