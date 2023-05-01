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

export interface Genre {
  genre: string;
  movies: MovieObject[];
}

export interface MoviesObject {
  genres?: Genre[];
}

let MovieProgresses: string[] = ['To watch', 'Watched'];
let TVShowProgresses: string[] = ['To watch', 'Watching', 'Watched'];
export { MovieProgresses, TVShowProgresses };
