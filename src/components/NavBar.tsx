import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            ></IconButton>
          <Link to='tvshows' style={{textDecoration: 'none'}}>
            <Typography variant='h6' color='white' component='div'>
              TV Shows
            </Typography>
          </Link>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 4 }}
          ></IconButton>
          <Link to='movies' style={{textDecoration: 'none'}}>
            <Typography variant='h6' color='white' component='div'>
              Movies
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
