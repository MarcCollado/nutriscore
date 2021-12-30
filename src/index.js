import React from 'react';
import ReactDOM from 'react-dom';

// Roboto Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Global container
import Container from '@mui/material/Container';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Container
      sx={{
        border: '1px solid #00000025',
        borderRadius: 2,
        mt: 2,
        mr: 'auto',
        mb: 2,
        ml: 'auto',
        p: 2,
      }}
    >
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
