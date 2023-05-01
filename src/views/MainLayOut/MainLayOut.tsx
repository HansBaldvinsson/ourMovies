import React from 'react';
import './MainLayOut.css';
import NavBar from '../../components/NavBar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import SubNavBar from '../../components/SubNavBar';

const MainLayOut = () => {
  return (
    <Box>
      <NavBar />
      <Outlet/>
    </Box>
  );
}

export default MainLayOut;
