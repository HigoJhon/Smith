import { Router } from 'express';
import productController from '../controllers/product.controller';

const router = Router();

router.get('/', productController.getAll);
router.post('/', productController.post);

export default router;