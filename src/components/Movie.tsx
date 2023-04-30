import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { MovieObject } from '../constants/constants';

const Movie = ({ movie }: { movie: MovieObject }) => {
  return (
    <Card>
      <CardMedia>
        <CardContent>
          <img src={movie.img}></img>
          <Typography gutterBottom variant='h5' component='div'>
            {movie.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {movie.description}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {movie.rating}
          </Typography>
        </CardContent>
      </CardMedia>
    </Card>
  );
};

export default Movie;
