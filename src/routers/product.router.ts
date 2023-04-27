import { Router } from 'express';
import productController from '../controllers/product.controller';
import valid from '../middlewares/validProduct';

const router = Router();

router.get('/', productController.getAll);
router.post('/', valid.amountChecked, valid.nameChecked, productController.post);

export default router;