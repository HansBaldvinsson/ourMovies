import { Box, Typography } from '@mui/material';
import ProgressList from '../../components/ProgressList';
import React from 'react';

const Movies = () => {
  return (
    <Box>
      <Typography>MOVIES</Typography>
      <ProgressList material={'movies'} />
    </Box>
  );
};

export default Movies;
