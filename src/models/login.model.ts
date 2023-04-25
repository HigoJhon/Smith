import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/IUser';

async function post(login: IUser): Promise<IUser> {
  const { username, password } = login;

  const [[user]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?;',
    [username, password],
  );

  return user as IUser;
}

export default {
  post,
};