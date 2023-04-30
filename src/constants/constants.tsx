export interface MovieObject {
  name: string;
  img: string;
  progress: string;
  rating: string;
  description: string;
}

export interface TVShowObject {
  name: string;
  img: string;
  progress: string;
  currentEpisode: string;
  rating: string;
  decsription: string;
}

let MovieProgresses: string[] = ['to watch', 'watched'];
let TVShowProgresses: string[] = ['to watch', 'watching', 'watched'];
export { MovieProgresses, TVShowProgresses };

export interface CurrentGenre {
  currentGenre: string;
  tvShowOrMovie: string;
}

interface Genres {
  genre: string;
  movies: MovieObject[];
}

export interface AllMovies {
  allMovies: Genres[];
}
