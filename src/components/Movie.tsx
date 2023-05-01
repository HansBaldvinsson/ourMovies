import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { MovieObject } from '../constants/constants';
import Rating from './Rating';
import { Link } from 'react-router-dom';

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
        <Link to={`http://localhost:3000/movie/${movie.id}`} style={{textDecoration: 'none'}}>
          <CardMedia
            sx={{
              width: '30vw',
              height: '40vh'
            }}
            image={movie.img}
            title='green iguana'
          />
        </Link>
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
