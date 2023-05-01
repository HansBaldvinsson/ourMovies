const moviesObj = require('./movies.json');
const tvShowObj = require('./tvshows.json');

const setupRoutes = (router) => {
  // Movies
  router.get('/movies', (req, res) => {
    return res.json(moviesObj);
  });
  router.get('/movie/:id', (req, res) => {
    const movie = moviesObj.genres.map((genre) =>
      genre.movies.find((m) => m.id == req.params.id)
    );
    if (!movie) {
      return res.sendStatus(404);
    }
    return res.json(movie[0]);
  });

  // TV Shows
  router.get('/tvShows', (req, res) => {
    return res.json(tvShowObj);
  });
  router.get('/tvShows/:id', (req, res) => {
    const tvShow = tvShowObj.find((tvShow) => tvShow.id == req.params.id);
    if (!tvShow) {
      return res.sendStatus(404);
    }
    return res.json(tvShow);
  });
};

module.exports = setupRoutes;
