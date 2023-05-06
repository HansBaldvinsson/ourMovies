import { configureStore } from '@reduxjs/toolkit';
import currentInfoReducer from './slices/currentlyGenreSlice';
import allMoviesReducer from './slices/allMoviesSlice';
import movieReducer from './slices/movieSlice';
import allTvShowReducer from './slices/allTvShowSlice';
import tvShowReducer from './slices/tvShowSlice';

const store = configureStore({
  reducer: {
    currentInfo: currentInfoReducer,
    allMovies: allMoviesReducer,
    movie: movieReducer,
    allTvShows: allTvShowReducer,
    tvShow: tvShowReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
