import { baseUrl } from "@/constants/Constants";
import { fetcher } from "../utils/fetcher";
import { Item } from "@/types/movies";
import useMovieStore from "@/state/MoviesState";
import Carousel from "@/components/Carrousel";
import Imagen from "@/components/BgImage";
import Description from "@/components/Description";
const getData = async () => {
  // Fetch data from external API
  return await fetcher("/popular");
};
export default async function Home() {
  const results = await getData();
  // const movieStore = useMovieStore();
  // if(movieStore.movies.length <= 0){
  //   movieStore.setMovies(results?.results);
  //   movieStore.setSelectedMovie(results?.results[0])
  // }
  const selectedMovie = results?.results[0];
  const movies = results?.results;
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Imagen/>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <Description />
        <div className="mt-5" />
        <Carousel movies={movies} selectedMovie={selectedMovie} />
        
      </div>
    </div>
  );
}
