import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchMovies } from '../../actions/fetchMovies';
import ProgressList from '../../components/ProgressList';
import { updateTvShowOrMovie } from '../../slices/currentlyGenreSlice';
import SubNavBar from '../../components/SubNavBar';

interface TvShowsState extends RootState {}

const TvShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTvShowOrMovie('tvshow'));
  }, []);

  return (
    <>
      <SubNavBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginTop: 3
        }}
      >
        <ProgressList />
      </Box>
    </>
  );
};

export default TvShows;
