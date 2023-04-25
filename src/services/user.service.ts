import userModels from '../models/user.model';
import { IUser } from '../interfaces/IUser';
import token from '../auth/token';

async function post(user: IUser): Promise<string> {
  const id = await userModels.post(user);
  const creatToken = token.createToken({ ...user, id });
  return creatToken;
}

export default {
  post,
};