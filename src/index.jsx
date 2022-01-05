import React from 'react';
import ReactDOM from 'react-dom';

import { Container } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Container
      sx={{
        mx: 'auto',
        my: 6,
      }}
    >
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
