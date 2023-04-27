import { Response, Request, NextFunction } from 'express';

async function nameChecked(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  if (name === undefined) return res.status(400).json({ message: '"name" is required' });
  if (name.length < 2) {
    return res.status(422).json({
      message: '"name" length must be at least 3 characters long',
    });
  }
  if (Number(name)) {
    return res.status(422).json({
      message: '"name" must be a string',
    });
  }

  next();
}

async function amountChecked(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;
  if (amount === undefined) return res.status(400).json({ message: '"amount" is required' });
  if (amount.length < 2) {
    return res.status(422).json({
      message: '"amount" length must be at least 3 characters long',
    });
  }
  if (Number(amount)) {
    return res.status(422).json({
      message: '"amount" must be a string',
    });
  }

  next();
}

export default {
  nameChecked,
  amountChecked,
};