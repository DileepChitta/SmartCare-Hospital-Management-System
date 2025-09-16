const express = require('express');
const router = express.Router();


const cardiologyDoctors = [
  {
    name: "Dr. Asha Kumar",
    specialty: "Cardiology",
    email: "asha@example.com",
    phone: "9876543210",
    experience: 10,
    bio: "Dr. Asha Kumar has over 10 years of experience in treating complex heart conditions. She is passionate about preventive cardiology and patient education.",
    image: "/images/asha.jpg",
    socialLinks: {
      twitter: "https://twitter.com/ashakumar",
      linkedin: "https://linkedin.com/in/ashakumar"
    }
  },
  {
    name: "Dr. Rajesh Singh",
    specialty: "Cardiology",
    email: "rajesh@example.com",
    phone: "9123456780",
    experience: 12,
    bio: "Dr. Rajesh Singh specializes in coronary artery diseases and heart failure. He focuses on minimally invasive treatments and patient-centered care.",
    image: "/images/rajesh.jpg",
    socialLinks: {
      twitter: "https://twitter.com/rajeshsingh",
      linkedin: "https://linkedin.com/in/rajeshsingh"
    }
  }
];


router.get('/Cardiology', (req, res) => {
  res.render('Cardiology', { doctors: cardiologyDoctors });
});

module.exports = router;