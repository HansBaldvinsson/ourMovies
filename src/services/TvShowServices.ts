const baseURL = 'http://localhost:4500/api';

const TvShowService = {
  getTvShows: async function () {
    try {
      const response = await fetch(`${baseURL}/tvShows`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch boss');
    }
  }
};

export default TvShowService;
