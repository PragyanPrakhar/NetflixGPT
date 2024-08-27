import { IMG_CDN_URL } from "../utils/constants";
const SingleMovieCard = ({ poster_path, original_title }) => {
    return (
        <div className="m-4">
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img
                    src={IMG_CDN_URL + poster_path}
                    alt=""
                    className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2 bg-transparent">
                        <h2 className="text-3xl font-semibold tracking-wide">
                            {original_title}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMovieCard;
