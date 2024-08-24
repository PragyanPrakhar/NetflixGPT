import ClipLoader from "react-spinners/ClipLoader";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-bold mb-6">{movie?.original_title}</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-4xl">
                <img
                    className="w-64 h-auto mb-6 md:mb-0 rounded-lg shadow-lg"
                    src={`${IMG_CDN_URL}${movie?.poster_path}`}
                    alt={movie?.title}
                />
                <div className="flex flex-col w-full md:w-2/3 p-4 md:pl-8">
                    <h2 className="text-2xl mb-4">{movie?.status}</h2>
                    <p className="text-lg mb-2">
                        Runtime: {movie?.runtime} minutes
                    </p>
                    <p className="text-lg italic mb-4">"{movie?.tagline}"</p>
                    <p className="text-lg">
                        Release Date: {movie?.release_date}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
