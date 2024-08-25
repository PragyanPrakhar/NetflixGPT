import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    //if my store has already playing movies then we need to avoid to make the api call again and again.
    //MEMOIZATION
    const nowPlayingMovies = useSelector(
        (store) => store.movies.nowPlayingMovies
    );

    const getNowPlayingMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/now_playing?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        json.results;
        dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
    }, []);
};
export default useNowPlayingMovies;
