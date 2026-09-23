import QRCode from 'qrcode';
import Restaurant from '../models/Restaurant.js';

// @desc   Generate QR code for the restaurant's menu page
// @route  GET /api/qr
export const generateQR = async (req, res) => {
  try {
    // Abhi single-restaurant system hai, so pehla (aur sirf) restaurant document utha lo
    let restaurant = await Restaurant.findOne();

    // Agar restaurant document abhi tak nahi bana, ek default bana do
    if (!restaurant) {
      restaurant = await Restaurant.create({ name: 'SmartDine Restaurant' });
    }

    // Yeh URL hoga jo QR scan karne par khulega
    const menuUrl = `${process.env.CLIENT_URL}/menu/${restaurant._id}`;

    // QR code ko base64 image (data URL) ke tor pe generate karo
    const qrImage = await QRCode.toDataURL(menuUrl);

    res.json({ qrImage, menuUrl });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};