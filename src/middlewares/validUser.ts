import { Response, Request, NextFunction } from 'express';

async function userNameChecked(req: Request, res: Response, next: NextFunction) {
  const { username } = req.body;
  if (username === undefined) return res.status(400).json({ message: '"username" is required' });
  if (+username) {
    return res.status(422).json({
      message: '"username" must be a string',
    });
  }
  console.log(username.length <= 2);
  
  if (username.length <= 2) {
    return res.status(422).json({
      message: '"username" length must be at least 3 characters long',
    });
  }
  next();
}

async function vocationtChecked(req: Request, res: Response, next: NextFunction) {
  const { vocation } = req.body;
  if (vocation === undefined) return res.status(400).json({ message: '"vocation" is required' });
  if (Number(vocation)) {
    return res.status(422).json({
      message: '"vocation" must be a string',
    });
  }
  if (vocation.length <= 2) {
    return res.status(422).json({
      message: '"vocation" length must be at least 3 characters long',
    });
  }

  next();
}

const levelChecked = async (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (level === undefined) return res.status(400).json({ message: '"level" is required' });
  if (Number(level) < 1) {
    return res.status(422).json({
      message: '"level" must be greater than or equal to 1',
    });
  }
  if (!Number(level)) {
    return res.status(422).json({
      message: '"level" must be a number',
    });
  }

  next();
};

async function passwordChecked(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;
  if (password === undefined) return res.status(400).json({ message: '"password" is required' });
  if (password.length < 8) {
    return res.status(422).json({
      message: '"password" length must be at least 8 characters long',
    });
  }
  if (Number(password)) {
    return res.status(422).json({
      message: '"password" must be a string',
    });
  }

  next();
}

export default {
  userNameChecked,
  vocationtChecked,
  levelChecked,
  passwordChecked,
};
