import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentGenre : '',
    tvShowOrMovie: ''
};

const currentGenre = createSlice({
    name: 'currentGenre',
    initialState,
    reducers: {
        updateCurrentGenre: (state, action) => {
            state.currentGenre = action.payload;
        },
        updateTvShowOrMovie: (state, action) => {
            state.tvShowOrMovie = action.payload;
        }
    }
})

export const {updateCurrentGenre: updateCurrentGenre} = currentGenre.actions
export default currentGenre.reducer