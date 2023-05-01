import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from '../actions/fetchMovies';

const initialState = {
    movies: {}
}

const allMovies = createSlice({
    name: 'allMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
    }
})

export default allMovies.reducer