import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IProduct } from '../interfaces/IProducts';

async function getAll(): Promise<IProduct[]> {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products;',
  );
  return products as IProduct[];
}

async function post(product: IProduct): Promise<number> {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`INSERT INTO Trybesmith.products
  (name, amount) VALUES (?, ?);`, [name, amount]);
  return insertId;
}

export default {
  post,
  getAll,
};