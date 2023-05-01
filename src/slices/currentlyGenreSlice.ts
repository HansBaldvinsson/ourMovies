import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentGenre: '',
  tvShowOrMovie: ''
};

const currentState = createSlice({
  name: 'currentState',
  initialState,
  reducers: {
    updateCurrentGenre: (state, action) => {
      state.currentGenre = action.payload;
    },
    updateTvShowOrMovie: (state, action) => {
      state.tvShowOrMovie = action.payload;
    }
  }
});

export const { updateCurrentGenre: updateCurrentGenre } = currentState.actions;
export default currentState.reducer;
