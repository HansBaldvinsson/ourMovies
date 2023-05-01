export interface MovieObject {
  id: string;
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

export interface ListObject {
  genres?: Genre[];
}

export interface Genre {
  genre: string;
  material: MovieObject[] | TVShowObject[];
}

let MovieProgresses: string[] = ['To watch', 'Watched'];
let TVShowProgresses: string[] = ['To watch', 'Watching', 'Watched'];
export { MovieProgresses, TVShowProgresses };
