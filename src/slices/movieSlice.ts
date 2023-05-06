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

const movie = createSlice({
    name: 'allMovies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.movie.id = action.payload.id;
                state.movie.name = action.payload.name;
                state.movie.img = action.payload.img;
                state.movie.progress = action.payload.progress;
                state.movie.rating = action.payload.rating;
                state.movie.description = action.payload.description;
            })
    }
})

export default movie.reducer