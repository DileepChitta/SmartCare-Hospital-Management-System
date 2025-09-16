const express = require('express');
const router = express.Router();
const Doctor = require('../models/Doctors');
const Appointment = require('../models/Appointment');


router.get('/appointments', async (req, res) => {
  try {
    const departments = await Doctor.distinct('specialty');
    const doctors = await Doctor.find();
    res.render('bookAppointment', { departments, doctors });
  } catch (err) {
    res.status(500).send('Error loading appointment form');
  }
});


router.post('/appointments', async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.render('bookAppointment', { success: 'Appointment booked successfully!', departments: [], doctors: [] });
  } catch (err) {
    console.error(err);
    res.render('bookAppointment', { error: 'Error booking appointment. Please try again.', departments: [], doctors: [] });
  }
});


router.get('/doctors/:dept', async (req, res) => {
  try {
    const dept = req.params.dept;
    const doctors = await Doctor.find({ specialty: dept });
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching doctors' });
  }
});

module.exports = router;