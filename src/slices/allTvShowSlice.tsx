import { createSlice } from '@reduxjs/toolkit';
import { fetchTvShows } from '../actions/fetchTvShows';

const initialState = {
  tvShows: {}
};

const TvShows = createSlice({
  name: 'allTvShows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTvShows.fulfilled, (state, action) => {
      state.tvShows = action.payload;
    });
  }
});

export default TvShows.reducer;
