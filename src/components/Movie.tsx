import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface Movie {
  name: String;
  img: String;
  progress: String;
  rating: String;
  description: String;
}

const Movie = ({ movie }: { movie: Movie }) => {
  return (
    <Card>
      <CardMedia>
        <CardContent>
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
