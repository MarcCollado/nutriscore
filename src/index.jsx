import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './components/App';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Container
      sx={{
        mx: 'auto',
        my: 4,
      }}
    >
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
