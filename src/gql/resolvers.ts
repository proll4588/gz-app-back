import { resolveCreatePool } from './requests/pool/create-pool/createPool';
import { authOnly } from './libs/authOnly';
import { resolveGetPool } from './requests/pool/get-pool';
import { resolveDeletePool } from './requests/pool/delete-pool';
import { resolveUpdatePool } from './requests/pool/update-pool';
import { resolveCreateTask } from './requests/task/create-task/createTask';
import { resolveUpdateTask } from './requests/task/update-task';

export const resolvers = {
  Query: {
    getPool: authOnly(resolveGetPool),
  },
  Mutation: {
    createPool: authOnly(resolveCreatePool),
    deletePool: authOnly(resolveDeletePool),
    updatePool: authOnly(resolveUpdatePool),

    createTask: authOnly(resolveCreateTask),
    updateTask: authOnly(resolveUpdateTask),
  },
};
