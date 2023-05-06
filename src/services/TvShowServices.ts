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
      throw new Error('Failed to fetch tv shows');
    }
  },
  getTvShow: async function (id: string) {
    try {
      const response = await fetch(`${baseURL}/tvShow/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch tv shows');
    }
  }
};

export default TvShowService;
