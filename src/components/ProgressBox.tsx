import React from 'react';
import { Box, Typography } from '@mui/material';
import Movie from './Movie';
import { MovieObject } from '../constants/constants';

let movies: MovieObject[] = [];

const ProgressBox = ({ progress }: { progress: String }) => {
  return (
    <Box>
      <Typography>{progress}</Typography>
      {movies.map((movie) => (
        <Movie movie={movie}></Movie>
      ))}
    </Box>
  );
};

export default ProgressBox;
