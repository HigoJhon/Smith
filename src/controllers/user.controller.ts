import { Request, Response } from 'express';
import userService from '../services/user.service';

const post = async (req: Request, res: Response) => {
  const user = req.body;
  const userPost = await userService.post(user);
  return res.status(201).json({ token: userPost });
};

export default {
  post,
};