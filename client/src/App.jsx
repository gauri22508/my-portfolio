
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  //const [message, setMessage] = useState('')

  // useEffect(() => {
  //   axios.get('http://localhost:3000')
  //     .then(response => setMessage(response.data))
  //     .catch(error => console.error('Error fetching message:', error))
  // }, [])

  return (
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
