"use client";

import { imageUrl } from "@/constants/Constants";
import useMovieStore from "@/state/MoviesState";

const Imagen = () => {
    const movieStore = useMovieStore();
    const url = `${imageUrl}${movieStore.selectedMovie.poster_path}`;
    const { title } = movieStore.selectedMovie;
    return(
     <img src={url} alt={title} className="w-full h-full object-fit blur-sm" />
    );
}
export default Imagen;