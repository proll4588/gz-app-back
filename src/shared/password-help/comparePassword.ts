import { LoginData } from '../../entities/user/user.interface';
import bcrypt from 'bcrypt';

export const comparePassword = (
  pass1: LoginData['password'],
  pass2: LoginData['password']
) => {
  return bcrypt.compareSync(pass1, pass2);
};
