import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
    return (
        <>
            <div className="fixed bg-black h-[300vh] ">
                <img className="w-screen h-screen object-cover" src={BG_URL} alt="image" />
            </div>
            <div className="relative ">
                <div className="absolute w-screen top-12  md:p-0">
                    <GptSearchBar />
                    <GptMovieSuggestions />
                </div>
            </div>
        </>
    );
};

export default GptSearch;
