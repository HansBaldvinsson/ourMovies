import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchMovies } from '../../actions/fetchMovies';

interface TvShowsState extends RootState {}

const TvShows = () => {
  const dispatch = useDispatch<AppDispatch>();
  let movies = useSelector((state: TvShowsState) => state.allMovies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  return (
    <Box>
      <Typography>TVSHOWS</Typography>
    </Box>
  );
};

export default TvShows;
