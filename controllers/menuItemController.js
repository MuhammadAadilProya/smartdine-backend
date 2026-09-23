import MenuItem from '../models/MenuItem.js';

// @desc   Get all menu items (with category populated)
// @route  GET /api/menu
export const getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find().populate('category', 'name');
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Create menu item (admin only)
// @route  POST /api/menu
export const createMenuItem = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;
    const item = await MenuItem.create({ name, description, price, image, category });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Update menu item (admin only)
// @route  PUT /api/menu/:id
export const updateMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    Object.assign(item, req.body); // jo fields body mein aayen wahi update ho jayen
    const updated = await item.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Delete menu item (admin only)
// @route  DELETE /api/menu/:id
export const deleteMenuItem = async (req, res) => {
  try {
    const item = await MenuItem.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    await item.deleteOne();
    res.json({ message: 'Menu item removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};