const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");


router.get("/contact", (req, res) => {
  res.render("contact", { success: null });
});

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    // send success message to EJS
    res.render("contact", { success: "Message sent successfully!" });

  } catch (err) {
    console.error("Error saving contact form:", err);
    res.status(500).send("Something went wrong!");
  }
});



module.exports = router;