const baseURL = 'http://localhost:4500/api/';

const movieService = { 
    getMovies: async function () {
        try {
            const response = await fetch(`${baseURL}/movies`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log("meow");
            console.log(data);

            return data;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to fetch boss');
        }
    },
}

export default movieService;