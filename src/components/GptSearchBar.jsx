// import { useSelector } from "react-redux";
// import lang from "../utils/languageConstants";

// const GptSearchBar = () => {
//     const langKey=useSelector(store=>store.config.lang);
//   return (
//     <div className="pt-[10%] flex justify-center ">
//       <form className="w-1/2 bg-black grid grid-cols-12">
//         <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder}/>
//         <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">{lang[langKey].search}</button>
//       </form>
//     </div>
//   )
// }

// export default GptSearchBar
// import { useSelector } from "react-redux";
// import lang from "../utils/languageConstants";

// const GptSearchBar = () => {
//     const langKey = useSelector(store => store.config.lang);
//     return (
//         <div className="pt-[10%] flex justify-center">
//             <form className="w-1/2 bg-gray-900 bg-opacity-75 rounded-full shadow-lg flex overflow-hidden">
//                 <input 
//                     type="text" 
//                     className="p-4 flex-grow text-lg bg-transparent placeholder-gray-400 focus:outline-none text-white" 
//                     placeholder={lang[langKey].gptSearchPlaceholder} 
//                 />
//                 <button 
//                     className="py-2 px-6 bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white font-semibold rounded-full flex items-center justify-center"
//                 >
//                     {lang[langKey].search}
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default GptSearchBar;



import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    return (
        <div className="pt-[10%] flex justify-center">
            <form className="w-2/3 md:w-1/2 bg-gray-800 bg-opacity-90 rounded-full shadow-xl flex overflow-hidden">
                <input 
                    type="text" 
                    className="p-4 flex-grow text-lg bg-transparent placeholder-gray-300 focus:outline-none text-white" 
                    placeholder={lang[langKey].gptSearchPlaceholder} 
                />
                <button 
                    className="py-2 px-6 bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white font-semibold rounded-full flex items-center justify-center"
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
}

export default GptSearchBar;

