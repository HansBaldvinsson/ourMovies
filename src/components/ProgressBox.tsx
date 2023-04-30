import React from 'react';
import { Box, Typography } from '@mui/material';

const ProgressBox = ({ progress }: { progress: String }) => {
  return (
    <Box>
      <Typography>{progress}</Typography>
    </Box>
  );
};

export default ProgressBox;
