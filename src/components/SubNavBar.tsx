import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { useState, ReactNode, SyntheticEvent, useEffect } from 'react';
import { updateCurrentGenre } from '../slices/currentlyGenreSlice';

let genreList: string[] = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Romance',
  'Sci-Fi',
  'Thriller'
];

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const dispatch = useDispatch();
  const { children, value, index, ...other } = props;

  useEffect(() => {
    dispatch(updateCurrentGenre(genreList[value]));
  }, [value]);

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

const SubNavBar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderColor: 'divider'
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          centered={true}
        >
          {genreList.map((genre, index) => (
            <Tab
              key={index}
              label={genre}
              {...a11yProps(index)}
              sx={{
                marginLeft: 2,
                marginRight: 2,
                marginTop: 0.75
              }}
            />
          ))}
        </Tabs>
      </Box>
      {genreList.map((genre, index) => (
        <Box key={`box${index}`} sx={{ height: 0, width: 0 }}>
          <TabPanel key={index} value={value} index={index}></TabPanel>
        </Box>
      ))}
    </Box>
  );
};

export default SubNavBar;
