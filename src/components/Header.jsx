import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
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
    const handleGptSearchClick = () => {
        //Toggle GPT Search
        dispatch(toggleGptSearchView());
    };
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };
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
                    <button
                        className="py-2 px-6 m-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        onClick={handleGptSearchClick}
                    >
                        {showGptSearch ? "HomePage" : "GPT Search"}
                    </button>
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

// import { signOut } from "firebase/auth";
// import { auth } from "../utils/firebase";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
// import { toggleGptSearchView } from "../utils/gptSlice";
// import { useDispatch } from "react-redux";
// import { changeLanguage } from "../utils/configSlice";

// const Header = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const user = useSelector((store) => store.user);
//     const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

//     const handleSignOut = () => {
//         signOut(auth)
//             .then(() => {
//                 navigate("/");
//             })
//             .catch((error) => {
//                 navigate("/error");
//             });
//     };

//     const handleGptSearchClick = () => {
//         dispatch(toggleGptSearchView());
//     };

//     const handleLanguageChange = (e) => {
//         dispatch(changeLanguage(e.target.value));
//     };

//     return (
//         <div className="absolute z-50 px-4 py-3 bg-gradient-to-b from-black to-transparent flex flex-col md:flex-row w-screen justify-between items-center">
//             <img className="w-36 md:w-44 mb-4 md:mb-0" src={LOGO} alt="Logo" />
//             {user && (
//                 <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
//                     {showGptSearch && (
//                         <select
//                             className="p-2 bg-transparent text-white rounded-lg border-2 border-gray-400 hover:border-white focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out shadow-md"
//                             onChange={handleLanguageChange}
//                         >
//                             {SUPPORTED_LANGUAGES.map((lang) => (
//                                 <option
//                                     key={lang.identifier}
//                                     value={lang.identifier}
//                                     className="text-black"
//                                 >
//                                     {lang.name}
//                                 </option>
//                             ))}
//                         </select>
//                     )}
//                     <button
//                         className="py-2 px-6 m-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
//                         onClick={handleGptSearchClick}
//                     >
//                         {showGptSearch ? "HomePage" : "GPT Search"}
//                     </button>
//                     <img
//                         alt="usericon"
//                         className="w-10 h-10 rounded-full"
//                         src={user?.photoURL}
//                     />
//                     <button
//                         onClick={handleSignOut}
//                         className="font-bold text-white mt-2 md:mt-0"
//                     >
//                         (Sign Out)
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Header;
