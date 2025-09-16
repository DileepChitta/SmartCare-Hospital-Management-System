const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
    trim: true,
  },
  patientEmail: {
    type: String,
    required: true,
    lowercase: true,
  },
  date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;