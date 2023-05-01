import { createSlice } from '@reduxjs/toolkit';
import { fetchMovie } from '../actions/fetchMovie';

const initialState = {
    movie: {
        id: '',
        name: '',
        img: '',
        progress: '',
        rating: '',
        description: ''
    }
}

const allMovies = createSlice({
    name: 'allMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
    }
})

export default allMovies.reducer