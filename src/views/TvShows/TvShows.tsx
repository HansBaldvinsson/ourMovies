import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RootState } from '../../store';
import ProgressList from '../../components/ProgressList';
import { updateTvShowOrMovie } from '../../slices/currentlyGenreSlice';

const TvShows = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTvShowOrMovie('tvshow'));
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginTop: 3
      }}
    >
      <ProgressList />
    </Box>
  );
};

export default TvShows;
