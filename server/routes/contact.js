const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const router = express.Router();

router.post('/contact', async (req, res) => {
  console.log('Contact request received:', req.body);
  
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields required!' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    timeout: 10000
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent!');
    res.json({ success: true, message: 'Message sent!' });
  } catch (error) {
    console.error('Email error:', error.message);
    res.status(500).json({ success: false, message: 'Error sending email - ' + error.message });
  }
});

module.exports = router;