import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
    // console.log(movies);
    return (
        <div className="px-6 w-full">
            <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
                <div className="flex">
                    {movies?.map((movie) => (
                        <Link to={"/movie/"+movie?.id} key={movie?.id}>
                            <MovieCard posterPath={movie?.poster_path} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
