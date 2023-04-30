import { configureStore } from '@reduxjs/toolkit';
import currentGenreReducer from './slices/currentlyGenreSlice';
import allMoviesReducer from './slices/allMoviesSlice';

const store = configureStore({
    reducer: {
        currentGenre: currentGenreReducer,
        allMovies: allMoviesReducer
    }
});

export default store;