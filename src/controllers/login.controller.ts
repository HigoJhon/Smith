import { Request, Response } from 'express';
import loginService from '../services/login.service';

async function post(req: Request, res: Response): Promise<Response> {
  try {
    const login = req.body;
    const token = await loginService.post(login);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
}

export default {
  post,
};