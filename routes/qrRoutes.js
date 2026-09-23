import express from 'express';
import { generateQR } from '../controllers/qrController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', protect, generateQR); // admin hi QR generate kare

export default router;