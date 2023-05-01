import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { MovieObject } from '../constants/constants';
import Rating from './Rating';

const Movie = ({ movie }: { movie: MovieObject }) => {
  return (
    <Card sx={{}}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <CardMedia
          sx={{
            width: '30vw',
            height: '40vh'
          }}
          image={movie.img}
          title='green iguana'
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {movie.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {movie.description}
        </Typography>
        <Rating rating={movie.rating} />
      </CardContent>
    </Card>
  );
};

export default Movie;
