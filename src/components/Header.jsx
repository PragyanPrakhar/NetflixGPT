import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView, toggleSearchMovies } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../utils/configSlice";
import { Link } from "react-router-dom";
// import { useState } from "react";
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    // const showMovieSearch = useSelector((store) => store.gpt.showSearchMovies);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
                navigate("/error");
            });
    };
    // const [value, setValue] = useState(null);
    const handleGptSearchClick = () => {
        //Toggle GPT Search
        dispatch(toggleSearchMovies()); //TODO
        dispatch(toggleGptSearchView());
    };
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    // const toggleMovieSearch=()=>{
    //     dispatch(toggleSearchMovies());
    // }
    /*    const handleInputSearch = (e) => {
        setValue(e.target.value);
    }; */

    //TODO :-   Absolute in the main container of the header div Relativve hone pe issue resolved of SearchedMovies
    return (
        <div className="absolute z-50 px-2 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row w-screen justify-between ">
            <img
                className="top-10 mx-auto md:mx-0  w-44 z-0"
                src={LOGO}
                alt="Logo"
            />
            {user && (
                <div className="flex p-2 justify-between">
                    {showGptSearch && (
                        <select
                            className="p-2 bg-transparent text-white rounded-lg border-2 border-gray-400 hover:border-white focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out shadow-md"
                            onChange={handleLanguageChange}
                        >
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option
                                    key={lang.identifier}
                                    value={lang.identifier}
                                    className="text-black"
                                >
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}
                    {/* {showMovieSearch && ( */}
                    <Link to="/searchedMovies">
                        <button
                            className="py-2 px-6 m-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out" /* onClick={toggleMovieSearch} */
                        >
                            Search Movies
                        </button>
                    </Link>
                    {/*   )} */}
                    <Link to="/browse">
                        <button
                            className="py-2 px-6 m-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            onClick={handleGptSearchClick}
                        >
                            {showGptSearch ? "HomePage" : "GPT Search"}
                        </button>
                    </Link>
                    <div>
                        <img
                            alt="usericon"
                            className="w-12 h-12"
                            src={user?.photoURL}
                        />
                        <button
                            onClick={handleSignOut}
                            className="font-bold text-white"
                        >
                            (Sign Out)
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Header;
