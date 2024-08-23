import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const MainContainer = () => {
    // console.log("ho")
    // useNowPlayingMovies();
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;  //Early Return
    const mainMovie=movies[0];
    // console.log("Hello");
    // console.log("Main Movie:",mainMovie);
    const {original_title,overview,id}=mainMovie;
    return (
        <div className="relative">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground  movieId={id}/>
        </div>
    );
};

export default MainContainer;
