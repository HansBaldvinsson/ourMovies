import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrentGenre, AllMovies } from '../../constants/constants';

const TvShows = () => {
    // let currentGenre: string = useSelector((state: CurrentGenre) => state.currentGenre);
    let movies = useSelector((state: AllMovies) => state.allMovies);
    console.log(movies);
    return (
        <Box>
            <Typography>
                TVSHOWS
            </Typography>
        </Box>
    )
}

export default TvShows;