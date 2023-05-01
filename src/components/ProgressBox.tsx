import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Movie from './Movie';
import { MovieObject, Genre, MoviesObject } from '../constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchMovies } from '../actions/fetchMovies';

interface MovieState extends RootState {}
interface CurrentState extends RootState {}

const ProgressBox = ({ progress }: { progress: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  let currentInfo = useSelector((state: CurrentState) => state.currentInfo);
  let allMovies: MoviesObject = useSelector(
    (state: MovieState) => state.allMovies.movies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  let correctGenre = {} as Genre;
  if (allMovies.genres !== undefined) {
    allMovies.genres.map((genre: Genre) => {
      if (
        genre.genre.toLowerCase() === currentInfo.currentGenre.toLowerCase()
      ) {
        correctGenre = genre;
      }
    });
  }

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
        backgroundColor: '#EEEEEE',
        borderRadius: 3,
        paddingLeft: 1,
        paddingRight: 1,
        paddingTop: 2.5,
        paddingBottom: 2.5
      }}
    >
      <Typography
        sx={{
          marginBottom: 1,
          marginTop: 1
        }}
      >
        {progress}
      </Typography>
      {movies &&
        movies.map((movie, index) => (
          <Movie key={`movie${index}`} movie={movie}></Movie>
        ))}
    </Box>
  );
};

export default ProgressBox;
