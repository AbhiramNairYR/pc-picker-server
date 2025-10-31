// Part Schema
const mongoose = require('mongoose');

const partCategories = [
  'CPU', 'CPU Cooler', 'Motherboard', 'Memory', 'Storage', 
  'Video Card', 'Case', 'Power Supply', 'Operating System', 'Monitor',
  'Sound Card', 'Wired Network Adapter', 'Wireless Network Adapter',
  'Headphones', 'Keyboard', 'Mouse', 'Speakers', 'Webcam',
  'Case Accessory', 'Case Fan', 'Fan Controller', 'Thermal Compound',
  'External Storage', 'Optical Drive', 'UPS System'
];

const partSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true, enum: partCategories },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    rating: { type: Number, default: 0 },
    ratingCount: { type: Number, default: 0 },
    specs: { type: mongoose.Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Part', partSchema);