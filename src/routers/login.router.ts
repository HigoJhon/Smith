import { Router } from 'express';
import loginController from '../controllers/login.controller';
import valid from '../middlewares/login';

const router = Router();

router.post('/', valid.loginChecked, loginController.post);

export default router;