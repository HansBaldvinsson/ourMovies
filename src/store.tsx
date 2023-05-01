import { configureStore } from '@reduxjs/toolkit';
import currentInfoReducer from './slices/currentlyGenreSlice';
import allMoviesReducer from './slices/allMoviesSlice';

const store = configureStore({
  reducer: {
    currentInfo: currentInfoReducer,
    allMovies: allMoviesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
