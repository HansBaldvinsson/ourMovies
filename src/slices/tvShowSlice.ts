import { createSlice } from '@reduxjs/toolkit';
import { fetchTvShow } from '../actions/fetchTvShow';

const initialState = {
  tvShow: {
    id: '',
    name: '',
    img: '',
    progress: '',
    currentEpisode: '',
    rating: '',
    description: ''
  }
};

const tvShow = createSlice({
  name: 'tvShow',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTvShow.fulfilled, (state, action) => {
      state.tvShow = action.payload;
    });
  }
});

export default tvShow.reducer;
