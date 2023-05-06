import { Box, CardMedia } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../actions/fetchMovie';
import { AppDispatch } from '../../store';
import { RootState } from '../../store';
import Movie from '../../components/Movie';
import { MovieObject } from '../../constants/constants';
import { BorderStyle } from '@mui/icons-material';

interface MovieState extends RootState { }

const MovieView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movieId } = useParams();
  const movie: MovieObject = useSelector((state: MovieState) => state.movie.movie);

  useEffect(() => {
    if (movieId) {
      dispatch(fetchMovie(movieId));
    }
  }, [])

  console.log(movie)

  return (
    <Box sx={{ display: 'flex', border: 'red dotted', height: '92.2vh' }}>
      <Box sx={{ display: 'flex', border: 'blue dotted', width: '100%', height: '50%', margin: '5% 10%'}}>
        <Box sx={{ display: 'flex', border: 'purple dotted', width: '40%', margin: '.2% .0 .2% .2%', backgroundColor: 'black', borderTopLeftRadius: '5%', borderBottomLeftRadius: '5%' }}>
          {movie.img && (
            <CardMedia
              sx={{
                width: '90%',
                margin: '5% 5%',
                height: '80%',
                borderRadius: '5%',
              }}
              image={movie.img}
            />
          )}
        </Box>
        <Box sx={{ display: 'flex', border: 'green dotted', width: '60%', margin: '.2% .2 .2% .0', backgroundColor: 'grey' }}>

        </Box>
      </Box>
    </Box>
  )
}

export default MovieView;