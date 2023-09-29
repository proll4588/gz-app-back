import { prisma } from '../../prisma/prisma';
import { ID } from '../../shared/commonTypes';
import { cryptPassword } from '../../shared/password-help/cryptPassword';
import { LoginData } from './user.interface';

export const getUserByLogin = (login: LoginData['login']) => {
  prisma.user.findUnique({ where: { login } });
};

export const getUserById = (id: ID) => {
  prisma.user.findUnique({ where: { id } });
};

export const createNewUser = (data: LoginData) => {
  const { login, password } = data;
  const cryptedPassword = cryptPassword(password);

  prisma.user.create({
    data: {
      login: login,
      password: cryptedPassword,
    },
  });
};
