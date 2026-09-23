import express from 'express';
import { createOrder, getOrders, updateOrderStatus } from '../controllers/orderController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', createOrder); // public — customer login ke bina order kare
router.get('/', protect, getOrders); // admin only
router.put('/:id', protect, updateOrderStatus); // admin only

export default router;