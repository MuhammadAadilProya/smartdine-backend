import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    logo: { type: String, default: '' },
    address: { type: String, default: '' },
    totalTables: { type: Number, default: 10 }, // checkout dropdown ke liye (Table 1 se 10)
    qrCodeUrl: { type: String, default: '' }, // generated QR image ka link/path
  },
  { timestamps: true }
);

export default mongoose.model('Restaurant', restaurantSchema);