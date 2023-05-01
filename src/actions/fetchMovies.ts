import { createAsyncThunk } from '@reduxjs/toolkit';
import movieService from '../services/Services';

export const fetchMovies = createAsyncThunk('movies/getMovies', async () => {
    const bosses = await movieService.getMovies();
    return bosses;
})