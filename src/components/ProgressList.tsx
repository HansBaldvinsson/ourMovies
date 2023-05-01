import React from 'react';
import ProgressBox from './ProgressBox';
import { List } from '@mui/material';
import { MovieProgresses, TVShowProgresses } from '../constants/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface CurrentState extends RootState {}

const ProgressList = () => {
  let currentInfo = useSelector((state: CurrentState) => state.currentInfo);

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {currentInfo.tvShowOrMovie.toLowerCase() === 'movies'
        ? MovieProgresses.map((movieProgress: string, index) => (
            <ProgressBox key={index} progress={movieProgress} />
          ))
        : TVShowProgresses.map((tvshowProgress: string, index) => (
            <ProgressBox key={index} progress={tvshowProgress} />
          ))}
    </List>
  );
};

export default ProgressList;
