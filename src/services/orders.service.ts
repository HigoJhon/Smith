import { RowDataPacket } from 'mysql2';
import ordersModel from '../models/orders.model';

async function getAll(): Promise<RowDataPacket[]> {
  const orders = await ordersModel.getAll();
  return orders;
}

export default {
  getAll,
};
