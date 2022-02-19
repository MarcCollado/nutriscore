import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Container } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './components/App';
import Navbar from './components/Navbar';
import Search from './components/Search';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 12.5,
  },
  palette: {
    primary: {
      main: blue[600],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Container maxWidth="lg" sx={{ mb: 8 }}>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
