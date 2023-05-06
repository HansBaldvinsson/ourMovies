import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../actions/fetchMovie';
import { AppDispatch } from '../../store';
import { RootState } from '../../store';
import { TVShowObject } from '../../constants/constants';

interface TvShowState extends RootState {}

const TvShowView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tvShowId } = useParams();
  const tvShow: TVShowObject = useSelector(
    (state: TvShowState) => state.tvShow.tvShow
  );

  useEffect(() => {
    if (tvShowId) {
      dispatch(fetchMovie(tvShowId));
    }
  }, []);

  return <Box sx={{ display: 'flex' }}>{tvShow.name}</Box>;
};

export default TvShowView;
