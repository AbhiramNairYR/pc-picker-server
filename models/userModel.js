// User Schema
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['normal', 'admin'], default: 'normal' },
    selectedParts: {
      cpu: { type: mongoose.Schema.Types.ObjectId, ref: 'Part', default: null },
      cpuCooler: { type: mongoose.Schema.Types.ObjectId, ref: 'Part', default: null },
      motherboard: { type: mongoose.Schema.Types.ObjectId, ref: 'Part', default: null },
      memory: { type: mongoose.Schema.Types.ObjectId, ref: 'Part', default: null },
      storage: { type: mongoose.Schema.Types.ObjectId, ref: 'Part', default: null },
      videoCard: { type: mongoose.Schema.Types.ObjectId, ref: 'Part', default: null },
      case: { type: mongoose.Schema.Types.ObjectId, ref: 'Part', default: null },
      powerSupply: { type: mongoose.Schema.Types.ObjectId, ref: 'Part', default: null },
      operatingSystem: { type: mongoose.Schema.Types.ObjectId, ref: 'Part', default: null },
      monitor: { type: mongoose.Schema.Types.ObjectId, ref: 'Part', default: null },
    },
  },
  { timestamps: true }
);

// Encrypt password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);