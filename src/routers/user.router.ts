import { Router } from 'express';
import userController from '../controllers/user.controller';
import valid from '../middlewares/validUser';

const router = Router();

router.post(
  '/', 
  valid.userNameChecked, 
  valid.vocationtChecked, 
  valid.levelChecked,
  valid.passwordChecked,
  userController.post,
);

export default router;