import React from 'react';
import { Box, Typography } from '@mui/material';
import Movie from './Movie';
import { MovieObject } from '../constants/constants';

const ProgressBox = ({ progress }: { progress: string }) => {
  let movies: MovieObject[] = [];
  let filteredMovies = movies.filter((movie) => movie.progress === progress);

  return (
    <Box
      sx={{
        display: 'flex',
        height: 'auto',
        width: '40%',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'lightGrey',
        borderRadius: 8
      }}
    >
      <Typography>{progress}</Typography>
      {filteredMovies.map((movie) => (
        <Movie movie={movie}></Movie>
      ))}
    </Box>
  );
};

export default ProgressBox;
