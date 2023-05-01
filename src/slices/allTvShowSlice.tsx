import { createSlice } from '@reduxjs/toolkit';
import { fetchTvShows } from '../actions/fetchTvShows';

const initialState = {
  movies: {}
};

const allMovies = createSlice({
  name: 'allTvShows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTvShows.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  }
});

export default allMovies.reducer;
