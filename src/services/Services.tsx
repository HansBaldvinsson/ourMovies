const baseURL = 'http://localhost:4500/api/';

const movieService = {
  getMovies: async function () {
    try {
      const response = await fetch(`${baseURL}/movies`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch movies');
    }
  },
  getMovie: async function (id: string) {
    try {
      const response = await fetch(`${baseURL}/movie/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch movies');
    }
  }
};

export default movieService;
