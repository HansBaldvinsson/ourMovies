import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { MovieObject } from '../constants/constants';
import Rating from './Rating';

const Movie = ({ movie }: { movie: MovieObject }) => {
  return (
    <Card
      sx={{
        marginLeft: 5,
        marginRight: 5
      }}
    >
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
        <Rating rating={movie.rating} />
        <Typography variant='body2' color='text.secondary'>
          {movie.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Movie;
