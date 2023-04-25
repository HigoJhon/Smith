import { RowDataPacket } from 'mysql2';
import connection from './connection';

async function getAll(): Promise<RowDataPacket[]> {
  const [orders] = await connection.execute<RowDataPacket[]>(
    `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
        FROM Trybesmith.orders as o
        INNER JOIN Trybesmith.products as p
        ON p.order_id = o.id
        Group BY o.id;`,
  );
  return orders;
}

export default {
  getAll,
};