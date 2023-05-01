import React from 'react';
import { Box, Typography } from '@mui/material';
import Movie from './Movie';
import { MovieObject, Genre } from '../constants/constants';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

interface TvShowsState extends RootState {}
interface CurrentState extends RootState {}

const ProgressBox = ({ progress }: { progress: string }) => {
  let currentInfo = useSelector((state: CurrentState) => state.currentInfo);
  let allMovies = useSelector((state: TvShowsState) => state.allMovies);

  let correctGenre = {} as Genre;
  allMovies.genres.map((genre: Genre) => {
    if (genre.genre.toLowerCase() === currentInfo.currentGenre.toLowerCase()) {
      correctGenre = genre;
    }
  });

  let movies: MovieObject[] = [];
  if (Object.keys(correctGenre).length !== 0) {
    if (correctGenre.movies.length !== 0) {
      movies = correctGenre.movies.filter((movie: MovieObject) => {
        return movie.progress.toLowerCase() == progress.toLowerCase();
      });
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        width: 'auto',
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'lightGrey',
        borderRadius: 5
      }}
    >
      <Typography sx={{ margin: 2 }}>{progress}</Typography>
      {movies &&
        movies.map((movie, index) => (
          <Movie key={`movie${index}`} movie={movie}></Movie>
        ))}
    </Box>
  );
};

export default ProgressBox;
