import { createAsyncThunk } from '@reduxjs/toolkit';
import tvShowService from '../services/TvShowServices';

export const fetchTvShow = createAsyncThunk(
  'tvShow/getTvShow',
  async (id: string) => {
    const TVShow = await tvShowService.getTvShow(id);
    return TVShow;
  }
);
