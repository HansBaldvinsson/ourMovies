import { configureStore } from '@reduxjs/toolkit';
import currentInfoReducer from './slices/currentlyGenreSlice';
import allMoviesReducer from './slices/allMoviesSlice';
import movieReducer from './slices/movieSlice';

const store = configureStore({
  reducer: {
    currentInfo: currentInfoReducer,
    allMovies: allMoviesReducer,
    movie: movieReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
