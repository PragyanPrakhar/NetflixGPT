import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    useMovieTrailer(movieId);
    return (
        <div className="w-screen overflow-hidden">
           {/*   <iframe
                className="w-screen aspect-video scale-[1.4] overflow-hidden loop=1 "
                src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&loop=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe> */}
            <iframe
                className="w-screen aspect-video scale-[1.4] overflow-hidden"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    );
};

export default VideoBackground;
