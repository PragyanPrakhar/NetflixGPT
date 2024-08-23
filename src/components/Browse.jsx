import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  //fetch data from tmdb api and update store.
  useNowPlayingMovies();
  return (
    <div className="overflow-hidden">
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
