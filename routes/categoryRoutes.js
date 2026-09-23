import express from 'express';
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getCategories); // public — customer bhi dekh sake
router.post('/', protect, createCategory); // admin only
router.put('/:id', protect, updateCategory); // admin only
router.delete('/:id', protect, deleteCategory); // admin only

export default router;