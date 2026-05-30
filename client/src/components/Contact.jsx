import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';
import { Box, Container, Typography, TextField, Alert } from '@mui/material';
import './ContactTemp.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState(null);

  //handlechange
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //  Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        'https://my-portfolio-8z8g.onrender.com/api/contact',
        formData
      );
      
      if (response.data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Try again!' });
    }
  };

  return (
    <section className="section" id="contact">
      <Container maxWidth="sm">
        <Typography className="title">
          Get In <span className="highlight">Touch</span>
        </Typography>

        <Typography className="contact-subtitle">
          Open to collaborations, opportunities or just a hello!
        </Typography>

        <Box 
          className="form-wrap" 
          component="form" 
          onSubmit={handleSubmit}
        >
          {/*  Status Message */}
          {status && (
            <Alert severity={status.type} sx={{ mb: 2 }}>
              {status.message}
            </Alert>
          )}

          {/*  Name Field */}
          <TextField
            name="name"
            value={formData.name}
            onChange={handleChange}
            label="Your Name"
            variant="outlined"
            fullWidth
            className="input-field"
            required
          />

          {/*  Email Field */}
          <TextField
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            label="Your Email"
            variant="outlined"
            fullWidth
            className="input-field"
            required
          />

          {/*  Message Field */}
          <TextField
            name="message"
            value={formData.message}
            onChange={handleChange}
            label="Your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            className="input-field"
            required
          />

          {/*  Submit Button */}
          <Button text="Submit" type="submit" />
           
          <Box className="links-row">
            <a href="https://github.com/gauri22508" className="badge">GitHub</a>
            <a href="https://www.linkedin.com/in/gauri-sharma-75160032a" className="badge">LinkedIn</a>
            
          </Box>

        </Box>
      </Container>
    </section>
  );
};

export default Contact;