import { Router } from 'express';
import loginController from '../controllers/login.controller';
import valid from '../middlewares/validLogin';

const router = Router();

router.post('/', valid.loginChecked, loginController.post);

export default router;