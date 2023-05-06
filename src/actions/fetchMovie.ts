import { createAsyncThunk } from '@reduxjs/toolkit';
import movieService from '../services/Services';

export const fetchMovie = createAsyncThunk(
  'movie/getMovie',
  async (id: string) => {
    const Movie = await movieService.getMovie(id);
    return Movie;
  }
);
