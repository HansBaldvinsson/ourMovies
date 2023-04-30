import { createSlice } from '@reduxjs/toolkit';
import movies from '../resourses/movies.json'

const allMovies = createSlice({
    name: 'allMovies',
    initialState: movies,
    reducers: {

    }
})

export default allMovies.reducer