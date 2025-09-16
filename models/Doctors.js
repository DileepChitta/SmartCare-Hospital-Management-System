const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true }, // e.g., Cardiology, Pediatrics
  email: { type: String, required: true },
  phone: { type: String },
});

module.exports = mongoose.model('Doctor', doctorSchema);