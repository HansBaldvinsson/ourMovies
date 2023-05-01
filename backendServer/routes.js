const moviesObj = require('./movies.json');

let movies = moviesObj;

const setupRoutes = router => {
    router.get('/movies', (req, res) => {
        return res.json(movies);
    });
    router.get('/movies/:id', (req, res) => {
        const movie = movies.find(movie => movie.id == req.params.id);
        if (!movie) { return res.sendStatus(404); }
        return res.json(movie);
    });
};

module.exports = setupRoutes;
