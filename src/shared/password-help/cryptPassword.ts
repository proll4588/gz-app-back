import { LoginData } from '../../entities/user/user.interface';
import bcrypt from 'bcrypt';

const secret = process.env.SECRET as string;

export const cryptPassword = (password: LoginData['password']) => {
  return bcrypt.hashSync(password, secret);
};
