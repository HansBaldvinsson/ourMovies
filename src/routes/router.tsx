import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import MainLayOut from '../views/MainLayOut/MainLayOut';
import TvShows from '../views/TvShows/TvShows';
import TvShowView from '../views/TvShowView/TvShowView';
import Movies from '../views/Movies/Movies';
import MovieView from '../views/MovieView/MovieView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayOut />}>
      <Route path='/' element={<Movies />} />
      <Route path='tvshows' element={<TvShows />} />
      <Route path='tvShow/:tvShowId' element={<TvShowView />} />
      <Route path='movies' element={<Movies />} />
      <Route path='movie/:movieId' element={<MovieView />} />
    </Route>
  )
);
export default router;
