import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="sticky" className="navbar-root">
      <Container maxWidth="lg">
        <Toolbar className="nav-container">
          {/* Logo */}
          <Typography variant="h6" className="logo-text">
            MY <span className="logo-accent">PORTFOLIO</span>
          </Typography>

          {/* Links*/}
          <Box className='nav-links'>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;