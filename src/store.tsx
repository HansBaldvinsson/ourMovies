import { configureStore } from '@reduxjs/toolkit';
import currentGenreReducer from './slices/currentlyGenreSlice';
import allMoviesReducer from './slices/allMoviesSlice';

const store = configureStore({
    reducer: {
        currentGenre: currentGenreReducer,
        allMovies: allMoviesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;