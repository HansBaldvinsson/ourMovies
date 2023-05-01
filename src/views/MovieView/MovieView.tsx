import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../../actions/fetchMovie';
import { AppDispatch } from '../../store';
import { RootState } from '../../store';
import Movie from '../../components/Movie';
import { MovieObject } from '../../constants/constants';

interface MovieState extends RootState { }

const MovieView = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { movieId } = useParams();
    const movie: MovieObject = useSelector((state: MovieState) =>  state.movie.movie);

    useEffect(() => {
        if (movieId) {
            dispatch(fetchMovie(movieId));
        }
    }, [])
    
    return (
        <Box sx={{display: 'flex'}}>
            {movie.name}
        </Box>
    )
}

export default MovieView;