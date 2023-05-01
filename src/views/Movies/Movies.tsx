import { Box, Typography } from '@mui/material';
import ProgressList from '../../components/ProgressList';
import React from 'react';

const Movies = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 3
      }}
    >
      <ProgressList material={'movies'} />
    </Box>
  );
};

export default Movies;
