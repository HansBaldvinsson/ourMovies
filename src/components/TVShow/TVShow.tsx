import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { TVShowObject } from '../../constants/constants';
import Rating from '../Rating';

const TVShow = ({ tvShow }: { tvShow: TVShowObject }) => {
  return (
    <Card sx={{}}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Link
          to={`http://localhost:3000/tvShow/${tvShow.id}`}
          style={{ textDecoration: 'none' }}
        >
          <CardMedia
            sx={{
              width: '30vw',
              height: '40vh'
            }}
            image={tvShow.img}
            title='green iguana'
          />
        </Link>
      </Box>
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {tvShow.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {tvShow.description}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {tvShow.currentEpisode}
        </Typography>
        <Rating rating={tvShow.rating} />
      </CardContent>
    </Card>
  );
};

export default TVShow;
