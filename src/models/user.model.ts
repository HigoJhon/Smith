import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IUser } from '../interfaces/IUser';

async function post(user: IUser): Promise<number> {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users
  (username, vocation, level, password) values (?, ?, ?, ?);`,
    [username, vocation, level, password],
  );
  return insertId;
}

export default {
  post,
};