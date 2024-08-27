import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        // gptMovies:null,
        movieNames: null,
        movieResults: null,
        showSearchMovies: true,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;

            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        toggleSearchMovies: (state) => {
            state.showSearchMovies = !state.showSearchMovies;
        },
    },
});

export const { toggleGptSearchView, addGptMovieResult, toggleSearchMovies } =
    gptSlice.actions;
export default gptSlice.reducer;
