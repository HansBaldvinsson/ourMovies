import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { TVShowObject } from '../../constants/constants';

const TVShow = ({ tvShow }: { tvShow: TVShowObject }) => {
  return (
    <Card>
      <CardMedia>
        <CardContent>
          <img src={tvShow.img}></img>
          <Typography gutterBottom variant='h5' component='div'>
            {tvShow.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {tvShow.decsription}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {tvShow.rating}
          </Typography>
          {tvShow.currentEpisode !== '' ? (
            <Typography variant='body2' color='text.secondary'>
              {tvShow.currentEpisode}
            </Typography>
          ) : (
            <></>
          )}
        </CardContent>
      </CardMedia>
    </Card>
  );
};

export default TVShow;
