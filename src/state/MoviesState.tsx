import { Result } from '@/types/movies';
import { create } from 'zustand';

type Movies ={
    movies: Result[];
    selectedMovie: Result,
    setMovies: (movies: Result[])=> void,
    setSelectedMovie: (selectedMovie: Result)=> void,
}

const useMovieStore = create<Movies>((set) => ({
    movies: [],
    selectedMovie: {
        adult: false,
        backdrop_path: '',
        genreIDS: [],
        id: 0,
        originalLanguage: '',
        originalTitle: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        releaseDate: new Date,
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0
    },
  setMovies: () => (movies: Result[]) => set({ movies }),
  setSelectedMovie: (selectedMovie: Result) => set({ selectedMovie }),
}));

export default useMovieStore;