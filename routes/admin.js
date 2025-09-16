const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();


function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.role === "admin") {
    return next();
  }
  return res.status(403).send("❌ Access denied.");
}


router.get("/appointments", isAdmin, async (req, res) => {
  const appointments = await Appointment.find().sort({ date: 1 });
  res.render("appointments", { appointments });
});

module.exports = router;