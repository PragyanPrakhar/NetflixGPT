import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
    return (
        <div className="relative">
            <div className="fixed bg-black h-[300vh] ">
                <img src={BG_URL} alt="image" />
            </div>
            <div className="absolute w-screen top-12">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </div>
    );
};

export default GptSearch;
