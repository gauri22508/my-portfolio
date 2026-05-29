 import React from 'react';
import { Button as MuiButton } from '@mui/material';
import "./Button.css";

const Button = ({ text }) => {
  return (
    <MuiButton 
      variant="contained" 
      className='btn'
      type="submit"  
    >
      {text}
    </MuiButton>
  );
};

export default Button;