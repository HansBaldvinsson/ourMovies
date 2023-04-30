import React from 'react';
import ProgressBox from './ProgressBox';
import { List } from '@mui/material';
import { MovieProgresses } from '../constants/constants';

const ProgressList = () => {
  return (
    <List>
      {MovieProgresses.map((movieProgress: String) => (
        <ProgressBox progress={movieProgress} />
      ))}
    </List>
  );
};

export default ProgressList;
