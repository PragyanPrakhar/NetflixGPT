import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
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
    return (
        <div className="absolute z-50 px-2 py-2 bg-gradient-to-b from-black  w-screen flex justify-between">
            <img
                className="top-10  w-44 z-0"
                src={LOGO}
                alt="Logo"
            />
            {user && (
                <div className="flex p-2">
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
            )}
        </div>
    );
};

export default Header;
