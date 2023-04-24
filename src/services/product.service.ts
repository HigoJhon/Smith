import productModel from '../models/product.model';
import { IProduct } from '../interfaces/IProducts';

async function creatProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;
  const id = await productModel.post(product);
  return { id, name, amount };
}

async function getAll(): Promise<IProduct[]> {
  const products = await productModel.getAll();
  return products;
}

export default {
  creatProduct,
  getAll,
};