// ALL routes, controllers, and middleware logic
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Import Models
const User = require('../models/userModel');
const Part = require('../models/partModel');

// --- Helper Function ---
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// --- Middleware (Combined) ---
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as an admin' });
  }
};

// ===================================
// --- AUTH ROUTES (/api/auth/...) ---
// ===================================

// @desc    Register a new user
// @route   POST /api/auth/register
router.post('/auth/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const user = await User.create({ username, email, password });
    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Authenticate user & get token (Login)
// @route   POST /api/auth/login
router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===================================
// --- PART ROUTES (/api/parts/...) ---
// ===================================

// @desc    Get all parts with filtering/searching
// @route   GET /api/parts
router.get('/parts', async (req, res) => {
  try {
    const { category, search, sort } = req.query;
    let filter = {};
    if (category) filter.category = { $regex: new RegExp(`^${category}$`, 'i') };
    if (search) filter.name = { $regex: search, $options: 'i' };
    
    let sortOptions = {};
    if (sort) {
      const sortOrder = sort.startsWith('-') ? -1 : 1;
      const sortKey = sort.startsWith('-') ? sort.substring(1) : sort;
      sortOptions[sortKey] = sortOrder;
    } else {
      sortOptions.name = 1;
    }

    const parts = await Part.find(filter).sort(sortOptions);
    res.json(parts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get a single part by ID
// @route   GET /api/parts/:id
router.get('/parts/:id', async (req, res) => {
  try {
    const part = await Part.findById(req.params.id);
    if (part) res.json(part);
    else res.status(404).json({ message: 'Part not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Create a new part (Admin Only)
// @route   POST /api/parts
router.post('/parts', protect, admin, async (req, res) => {
  try {
    const { name, category, price, imageUrl, specs } = req.body;
    const part = new Part({ name, category, price, imageUrl, specs });
    const createdPart = await part.save();
    res.status(201).json(createdPart);
  } catch (error) {
    res.status(400).json({ message: 'Error creating part', error: error.message });
  }
});

// @desc    Update a part (Admin Only)
// @route   PUT /api/parts/:id
router.put('/parts/:id', protect, admin, async (req, res) => {
  try {
    const { name, category, price, imageUrl, specs } = req.body;
    const part = await Part.findById(req.params.id);
    if (part) {
      part.name = name || part.name;
      part.category = category || part.category;
      part.price = price || part.price;
      part.imageUrl = imageUrl || part.imageUrl;
      part.specs = specs || part.specs;
      const updatedPart = await part.save();
      res.json(updatedPart);
    } else {
      res.status(404).json({ message: 'Part not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating part', error: error.message });
  }
});

// @desc    Delete a part (Admin Only)
// @route   DELETE /api/parts/:id
router.delete('/parts/:id', protect, admin, async (req, res) => {
  try {
    const part = await Part.findById(req.params.id);
    if (part) {
      await part.deleteOne();
      res.json({ message: 'Part removed' });
    } else {
      res.status(404).json({ message: 'Part not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ===================================
// --- USER ROUTES (/api/users/...) ---
// ===================================

// @desc    Get current user's profile
// @route   GET /api/users/profile
router.get('/users/profile', protect, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
});

// @desc    Get current user's build ("Selected Parts")
// @route   GET /api/users/build
router.get('/users/build', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)
      .populate('selectedParts.cpu')
      .populate('selectedParts.cpuCooler')
      .populate('selectedParts.motherboard')
      .populate('selectedParts.memory')
      .populate('selectedParts.storage')
      .populate('selectedParts.videoCard')
      .populate('selectedParts.case')
      .populate('selectedParts.powerSupply')
      .populate('selectedParts.operatingSystem')
      .populate('selectedParts.monitor');
    
    if (user) res.json(user.selectedParts);
    else res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Add/Update a part in the user's build
// @route   PUT /api/users/build
router.put('/users/build', protect, async (req, res) => {
  const { partId, category } = req.body;
  const validCategories = ['cpu', 'cpuCooler', 'motherboard', 'memory', 'storage', 'videoCard', 'case', 'powerSupply', 'operatingSystem', 'monitor'];
  
  if (!validCategories.includes(category)) {
    return res.status(400).json({ message: `Invalid part category key: ${category}` });
  }

  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.selectedParts[category] = partId ? partId : null;
    await user.save();
    
    const updatedUser = await User.findById(req.user._id).populate(validCategories.map(c => `selectedParts.${c}`).join(' '));
    res.json(updatedUser.selectedParts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get all users (Admin Only)
// @route   GET /api/users
router.get('/users', protect, admin, async (req, res) => {
  const users = await User.find({}).select('-password');
  res.json(users);
});

// @desc    Delete a user (Admin Only)
// @route   DELETE /api/users/:id
router.delete('/users/:id', protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.deleteOne();
      res.json({ message: 'User removed' });
    } else {
      res.status(4404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Update user role (Admin Only)
// @route   PUT /api/users/:id
router.put('/users/:id', protect, admin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      user.role = req.body.role || user.role;
      
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        role: updatedUser.role,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Error updating user', error: error.message });
  }
});

module.exports = router;