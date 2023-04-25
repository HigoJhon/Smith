import { Router } from 'express';
import orderController from '../controllers/orders.controller';

const router = Router();

router.get('/', orderController.getAll);

export default router;