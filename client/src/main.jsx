import React from 'react';
import ReactDOM from 'react-dom/client';
import {StyledEngineProvider} from '@mui/material/styles';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  {/* injectFirst allows Tailwind to override MUI styles easily */}
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>

</React.StrictMode>
);