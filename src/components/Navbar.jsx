import * as React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 11 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nutri-Score
          </Typography>

          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            <Button color="inherit">Auditor</Button>
          </Link>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/search">
            <Button color="inherit">Buscador</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
