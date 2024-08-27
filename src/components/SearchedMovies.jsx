import { API_OPTIONS, BG_URL } from "../utils/constants";
import Header from "./Header";
import { useRef, useState } from "react";
// import SingleMovieCard from "./SingleMovieCard";
import MovieList from "./MovieList";
// import { Link } from "react-router-dom";

const SearchedMovies = () => {
    const searchText = useRef(null);
    const [searchedMovies, setSearchedMovies] = useState(null);
    const handleMovieSearch = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
                searchText.current.value
            )}&include_adult=false&page=1`,
            API_OPTIONS
        );
        const data = await response.json();
        setSearchedMovies(data.results);
        console.log(data);
    };
    return (
        <div
            className="relative  overflow-y-hidden min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${BG_URL})` }}
        >
            <Header />
            <div className="flex flex-col items-center justify-center mt-28 px-4">
                <h1 className="text-3xl text-white mb-8">
                    Hello, Movie Searches are below
                </h1>
                <form
                    className="z-50 w-full max-w-xl bg-gray-800 bg-opacity-90 rounded-full shadow-xl flex overflow-hidden"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        ref={searchText}
                        type="text"
                        className="flex-grow text-lg bg-transparent placeholder-gray-300 focus:outline-none text-white px-4 py-2"
                        placeholder="Search For Movies"
                    />
                    <button
                        className="py-2 px-6 bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white font-semibold rounded-full flex items-center justify-center"
                        onClick={handleMovieSearch}
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="flex overflow-x-scroll">
                {searchedMovies && (
                    <MovieList title={searchText.current.value} movies={searchedMovies} />
                )}
            </div>
        </div>
    );
};

export default SearchedMovies;
