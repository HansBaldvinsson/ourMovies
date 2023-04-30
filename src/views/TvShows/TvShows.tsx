import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

interface TvShowsState extends RootState {}


const TvShows = () => {
    // let currentGenre: string = useSelector((state: CurrentGenre) => state.currentGenre);
    //
    let movies = useSelector((state: TvShowsState) => state.allMovies);
    
    return (
        <Box>
            <Typography>
                TVSHOWS
            </Typography>
        </Box>
    )
}

export default TvShows;