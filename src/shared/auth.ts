import { DBUser, LoginData } from '../entities/user/user.interface';

/**
 * Проверка валидности токена (проверка авторизации) при
 * вызове любого запроса
 */
export const context = ({ req, res }) => {
  const token = req.headers.authorization || '';
  if (!token) return { verified: false };

  try {
    const info = jwt.verify(token, secret);
    return { verified: true, userId: info.id };
  } catch (e) {
    return { verified: false };
  }
};

/* Проверка авторрзованности пользователя */
export const checkUserAuth = (context) => {
  const { verified } = context;
  if (!verified) throwNewGQLError('USER_IS_NOT_AUTHENTICATED');

  return true;
};

/* Логин пользователя по почте и паролю */
export const login = async (data: LoginData) => {
  const { login, password } = data;

  /* Проверка наличия пользователя */
  const user = await getUserByLogin(login);
  if (!user) throwNewGQLError('USER_NOT_FOUND');

  /* Проверка валидности пароля */
  const validPass = comparePassword(password, user.password);
  if (!validPass) throwNewGQLError('PASSWORD_IS_NOT_CORRECT');

  /* Если всё ок, то подписываем токен и отправляем клиенту */
  const token = signJWT(user.id);
  return { token };
};
