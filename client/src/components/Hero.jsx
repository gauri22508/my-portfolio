

import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import Button from './Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className='hero-section' id="hero">
            <Container maxWidth="lg" className='hero-container'>
                <Box className="flex-1 text-center md:text-left">
                    <Typography className='hero-subtitle'>
                        Software Engineer & Designer
                    </Typography>

                    <h1 className='hero-title'>
                        Creative <br />
                        <span className="text-slate-500"> Developer .</span>
                    </h1>

                    <p className='hero-name'>Gauri Sharma</p>

                    <p className='hero-description'>
                        I specialize in building (and occasionally designing) exceptional
                        digital experiences that are fast, accessible, and visually stunning.
                    </p>

                    {/* Download Resume */}
                    <a href="/resume.pdf" download="Gauri_Sharma_Resume.pdf">
                        <Button text="Download My CV" />
                    </a>
                </Box>
                <Box className="second-half">
                    <img src="/photo2.jpg" alt="photo" className='hero-image-card' />
                </Box>

            </Container>
        </section>
    );
};

export default Hero;