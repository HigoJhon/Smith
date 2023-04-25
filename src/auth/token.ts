import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

const secret = process.env.JWT_SECRET || '';
const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

function createToken(payload: IUser): string {
  return jwt.sign({ payload }, secret, jwtConfig);
}

export default {
  createToken,
};