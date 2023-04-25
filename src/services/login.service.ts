import loginModule from '../models/login.model';
import { ILogin } from '../interfaces/ILogin';
import token from '../auth/token';

async function post(login: ILogin): Promise<string> {
  const res = await loginModule.post(login);
  if (!res) throw new Error('Username or password invalid');
  const creatToken = token.createToken({ ...login });
  return creatToken;
}

export default {
  post,
};