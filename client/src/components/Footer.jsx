import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import './Footer.css';

const socials = [
  { icon: "fa-brands fa-github", name: "GitHub", link: "https://github.com/gauri22508" },
  { icon:"fa-brands fa-linkedin" , name: "LinkedIn", link: "https://www.linkedin.com/in/gauri-sharma-75160032a" },
  { icon: "fa-solid fa-envelope", name: "Email", link: "mailto:gaurisharma9105@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container maxWidth="lg">

        <Box className="footer-icons">
          {socials.map((s) => (
            <a key={s.name} href={s.link} className="footer-icon-wrap">
              <Box className="footer-icon"> <i className={s.icon}style={{fontsize:"24px"}}></i></Box>
              <Typography className="footer-icon-name">{s.name}</Typography>
            </a>
          ))}
        </Box>

        <Typography className="footer-text">
          Designed & Built by <span className="highlight"> &nbsp; Gauri Sharma</span>
        </Typography>

        <Typography className="footer-copy">
          © {new Date().getFullYear()} All rights reserved.
        </Typography>

      </Container>
    </footer>
  );
};

export default Footer;