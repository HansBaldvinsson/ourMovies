import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Movie from './Movie';
import TVShow from './TVShow/TVShow';
import {
  MovieObject,
  Genre,
  ListObject,
  TVShowObject
} from '../constants/constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { fetchMovies } from '../actions/fetchMovies';

interface MaterialState extends RootState {}
interface CurrentState extends RootState {}

const ProgressBox = ({ progress }: { progress: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  let currentInfo = useSelector((state: CurrentState) => state.currentInfo);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  let allMaterial: ListObject = useSelector(
    (state: MaterialState) => state.allMovies.movies
  );

  let correctGenre = {} as Genre;
  if (allMaterial.genres !== undefined) {
    allMaterial.genres.map((genre: Genre) => {
      if (
        genre.genre.toLowerCase() === currentInfo.currentGenre.toLowerCase()
      ) {
        correctGenre = genre;
      }
    });
  }

  let materials: MovieObject[] | TVShowObject[] = [];
  if (Object.keys(correctGenre).length !== 0) {
    if (correctGenre.material.length !== 0) {
      if (currentInfo.tvShowOrMovie.toLowerCase() === 'movies') {
        materials = (correctGenre.material as MovieObject[]).filter(
          (movie: MovieObject) => {
            return movie.progress.toLowerCase() == progress.toLowerCase();
          }
        );
      } else {
        materials = (correctGenre.material as TVShowObject[]).filter(
          (tvshow: TVShowObject) => {
            return tvshow.progress.toLowerCase() == progress.toLowerCase();
          }
        );
      }
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
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
      {currentInfo.tvShowOrMovie.toLowerCase() === 'movies'
        ? materials.map((movie, index) => (
            <Movie key={`movie${index}`} movie={movie as MovieObject}></Movie>
          ))
        : materials.map((tvShow, index) => (
            <TVShow
              key={`tvshow${index}`}
              tvShow={tvShow as TVShowObject}
            ></TVShow>
          ))}
    </Box>
  );
};

export default ProgressBox;
