const express = require ('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

// POST /api/contact
router.post('/contact', async (req, res) => {
  console.log('Contact request received:', req.body);
  
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields required!' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(' Email sent!');
    res.json({ success: true, message: 'Message sent!' });
  } catch (error) {
    console.error(' Email error:', error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
});

module.exports = router;