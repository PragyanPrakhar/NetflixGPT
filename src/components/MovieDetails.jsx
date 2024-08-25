import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${id}`,
                API_OPTIONS
            );
            const res = await data.json();
            setMovie(res);
            console.log(res);
        };
        fetchMovies();
    }, [id]);

    if (movie === null) {
        return (
            <div className="flex justify-center items-center h-screen">
                <ClipLoader
                    color={"#4A90E2"}
                    loading={true}
                    size={150}
                    css={{ border: "2px solid #4A90E2", borderRadius: "50%" }}
                />
            </div>
        );
    }

    return (
        <div className="bg-gray-900 text-white h-screen flex flex-col items-center ">
            {/* Movie Title */}
            <h1 className="mt-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 drop-shadow-lg animate-pulse mb-8">
                {movie?.original_title}
            </h1>
            
            {/* Movie Details Container */}
            <div className="mt-8 flex flex-col md:flex-row w-screen max-w-4xl">

                {/* Movie Poster and Status Tag */}
                <div className="relative">
                    <img
                        className="w-64 h-80 rounded-lg shadow-lg"
                        src={`${IMG_CDN_URL}${movie?.poster_path}`}
                        alt={movie?.title}
                    />
                    <span className={`absolute top-2 left-1 px-4 py-1 rounded-full text-sm font-semibold text-white ${movie?.status === "Released" ? "bg-green-500" : "bg-red-500"}`}>
                        {movie?.status === "Released" ? "Released" : "Not Released"}
                    </span>
                </div>

                {/* Movie Information */}
                <div className="flex flex-col ml-0 md:ml-12 mt-8 md:mt-0">
                    
                    {/* Genres */}
                    <div className="flex flex-wrap mb-4">
                        {movie?.genres?.map((genre) => (
                            <span
                                key={genre.id}
                                className="bg-gray-800 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400 cursor-pointer transition-all"
                            >
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    {/* Budget */}
                    <p className="text-lg italic mb-4">
                        Budget: ${movie?.budget?.toLocaleString()}
                    </p>

                    {/* Spoken Languages */}
                    <h2 className="text-xl font-semibold mb-2">Spoken Languages</h2>
                    <div className="flex flex-wrap mb-4">
                        {movie?.spoken_languages?.map((language) => (
                            <span
                                key={language.iso_639_1}
                                className="bg-gray-800 text-sm font-medium px-3 py-1 rounded-full mr-2 mb-2"
                            >
                                {language.name}
                            </span>
                        ))}
                    </div>

                    {/* Overview with Read More */}
                    <div className="mt-4 h-20 w-96">
                        <h2 className="text-xl font-semibold mb-2">Overview</h2>
                        <p className="text-lg  overflow-hidden">
                            {showMore ? movie?.overview : `${movie?.overview?.substring(0, 150)}...`}
                        </p>
                        <button
                            className="text-blue-500 hover:underline mt-2"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Read Less" : "Read More"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
