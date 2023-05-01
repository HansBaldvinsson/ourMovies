import { Box, Typography } from '@mui/material';
import ProgressList from '../../components/ProgressList';
import React from 'react';
import SubNavBar from '../../components/SubNavBar';

const Movies = () => {
  return (
    <>
      <SubNavBar/>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 3
        }}
      >
        <ProgressList material={'movies'} />
      </Box>
    </>
  );
};

export default Movies;
