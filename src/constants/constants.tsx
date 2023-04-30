export interface MovieObject {
  name: String;
  img: String;
  progress: String;
  rating: String;
  description: String;
}

let MovieProgresses: String[] = ['to watch', 'watched'];
export { MovieProgresses };

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