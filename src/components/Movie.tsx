import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { MovieObject } from '../constants/constants';
import Rating from './Rating';

const Movie = ({ movie }: { movie: MovieObject }) => {
  return (
    <Card sx={{ display: 'flex', margin: 2, BorderRadius: 5 }}>
      <CardMedia>
        <CardContent>
          <img src={movie.img}></img>
          <Typography gutterBottom variant='h5' component='div'>
            {movie.name}
          </Typography>
          <Rating rating={movie.rating} />
          <Typography variant='body2' color='text.secondary'>
            {movie.description}
          </Typography>
        </CardContent>
      </CardMedia>
    </Card>
  );
};

export default Movie;
