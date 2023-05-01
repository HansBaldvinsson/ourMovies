import { createAsyncThunk } from '@reduxjs/toolkit';
import movieService from '../services/Services';

export const fetchMovie = createAsyncThunk('movies/getMovies', async (id: string) => {
    const Movies = await movieService.getMovie(id);
    return Movies;
})