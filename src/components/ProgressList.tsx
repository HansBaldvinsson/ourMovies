import React from 'react';
import ProgressBox from './ProgressBox';
import { List } from '@mui/material';
import { MovieProgresses, TVShowProgresses } from '../constants/constants';

const ProgressList = ({ material }: { material: string }) => {
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {material === 'movies'
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
