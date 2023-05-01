import { Box, Typography } from '@mui/material';
import ProgressList from '../../components/ProgressList';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTvShowOrMovie } from '../../slices/currentlyGenreSlice';
import SubNavBar from '../../components/SubNavBar';

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTvShowOrMovie('movies'));
  }, []);

  return (
    <>
      <SubNavBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 3
        }}
      >
        <ProgressList />
      </Box>
    </>
  );
};

export default Movies;
