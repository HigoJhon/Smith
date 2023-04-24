import { Request, Response } from 'express';
import productService from '../services/product.service';

const post = async (req: Request, res: Response) => {
  const product = req.body;
  const productPost = await productService.creatProduct(product);
  return res.status(201).json(productPost);
};

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  return res.status(200).json(products);
};

export default {
  post,
  getAll,
};