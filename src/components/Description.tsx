'use client'
import useMovieStore from "@/state/MoviesState";

const Description =()=>{
    const movieStore = useMovieStore();
    const { selectedMovie } = movieStore;
    return(
        <div className="bg-black bg-opacity-70 p-8 rounded-lg text-white max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">{selectedMovie.title}</h1>
          <p className="mb-4">{selectedMovie.overview}</p>
          <div className="rating">
            <p className="mr-2">Rating: </p>  
          { [1,2,3,4,5].map((numero)=>(
            <input key={numero} type="radio" name="rating-1" className="mask mask-star bg-green-400" checked={Math.trunc(selectedMovie.vote_average/2) === numero ? true : false} />
           ))}
          </div>
          
        </div>
    );
}

export default Description;