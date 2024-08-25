import {useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { chatSession } from "../utils/gemini";
import { API_OPTIONS, PROMPT } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);

    const searchMovieTMDB=async(movie)=>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json=await data.json();
        return json.results;
    }


    const handleGptSearchClick = async() => {
        // console.log(searchText.current.value);
        // Make an API call to Gemini API and get the movie results;
        const query = searchText.current.value;
        const finalPromt = PROMPT.replace("#hollywoodaction",query)
        const result=await chatSession.sendMessage(finalPromt);
        // console.log("api results"+result.response.text());
        if(!result){//TODO: Write Error Handling here 
            }
        const apiResult = JSON.parse(result.response.text());
        const finalRes=apiResult.map((movie)=>movie.title);
        //here finalRes will be array of movies

        // For each movie , I will search TMDB API
        const data=finalRes.map(movie=>searchMovieTMDB(movie));
        const tmdbResults=await Promise.all(data);
        
        console.log(tmdbResults);
        dispatch(addGptMovieResult({movieNames:finalRes,movieResults:tmdbResults}))
    };
    return (
        <div className="pt-[10%] flex justify-center ">
            <form
                className="w-2/3 md:w-1/2 bg-gray-800 bg-opacity-90 rounded-full shadow-xl flex overflow-hidden"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className="p-4 flex-grow text-lg bg-transparent placeholder-gray-300 focus:outline-none text-white"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    className="py-2 px-6 bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white font-semibold rounded-full flex items-center justify-center"
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;