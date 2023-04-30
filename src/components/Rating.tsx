import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const BasicRating = ({ rating }: { rating: string }) => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 }
      }}
    >
      <Typography component='legend'>Rating</Typography>
      <Rating
        name='simple-controlled'
        value={parseInt(rating)}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      {/* <Typography component='legend'>No rating given</Typography>
      <Rating name='no-value' value={null} /> */}
    </Box>
  );
};

export default BasicRating;
