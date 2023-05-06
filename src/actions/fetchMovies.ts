import { createAsyncThunk } from '@reduxjs/toolkit';
import movieService from '../services/movieServices';

export const fetchMovies = createAsyncThunk('movies/getMovies', async () => {
    const movies = await movieService.getMovies();
    return movies;
});
