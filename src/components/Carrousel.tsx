'use client'
import Slider from 'react-slick';
import { Result } from '@/types/movies';
import useMovieStore from '@/state/MoviesState';
import { imageUrl } from '@/constants/Constants';
const Carousel = ({ movies, selectedMovie }:{movies: Result[], selectedMovie: Result })=>{
    const movieStore = useMovieStore();
    if(movieStore.movies.length <=0){
        movieStore.selectedMovie.id === 0 ? movieStore.setSelectedMovie(selectedMovie) : null;
        movieStore.setMovies(movies);
    }
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        dots: true,
        infinite: true,
        speed: 500,
        focusOnSelect:true,
        slidesToShow: 5,
        afterChange: (index: number)=>{ movieStore.setSelectedMovie(movies[index]);},
        initialSlide: movies.findIndex((movie) => movie.title === selectedMovie.title),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
    
      return (
        <div className="w-[95%] h-[50%]">
          <Slider {...settings}>
            {movies.map((movie) => (
              <div key={movie.title} className={`px-2 transition-transform ${movie.title === selectedMovie.title ? 'scale-x-20 w-full' : ''}`}>
                <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} className="w-50 rounded-lg" />
              </div>
            ))}
          </Slider>
        </div>
      );
};

export default Carousel;