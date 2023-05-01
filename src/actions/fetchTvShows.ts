import { createAsyncThunk } from '@reduxjs/toolkit';
import tvShowService from '../services/TvShowServices';

export const fetchTvShows = createAsyncThunk('tvShows/getTvShows', async () => {
  const tvShows = await tvShowService.getTvShows();
  return tvShows;
});
