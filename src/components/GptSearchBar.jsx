import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { chatSession } from "../utils/gemini";
import { PROMPT } from "../utils/constants";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const handleGptSearchClick = async() => {
        // console.log(searchText.current.value);
        // Make an API call to Gemini API and get the movie results;
        const query = searchText.current.value;
        const finalPromt = PROMPT.replace("#hollywoodaction",query)
        const result=await chatSession.sendMessage(finalPromt);
        console.log("api results"+result.response.text());
    };
    return (
        <div className="pt-[10%] flex justify-center">
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