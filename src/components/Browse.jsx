import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {
  //fetch data from tmdb api and update store.
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;

// fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)

      {/* 
        MainContainer
          - VideoBackGround
          - VideoTitle
        Secondary Container
          - MoviesList*n
              - Cards*n
      */}
