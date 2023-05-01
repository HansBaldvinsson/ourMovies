const moviesObj = require('./movies.json');

let movies = moviesObj;

const setupRoutes = router => {
    router.get('/movies', (req, res) => {
        return res.json(moviesObj);
    });
    router.get('/movie/:id', (req, res) => {
        const movie = moviesObj.genres.map((genre) => genre.movies.find((m) => m.id == req.params.id));
        if (!movie) { return res.sendStatus(404); }
        return res.json(movie[0]);
    });
};

module.exports = setupRoutes;