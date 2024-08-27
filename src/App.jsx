import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { Toaster } from 'react-hot-toast';
import { addUser, removeUser } from "./utils/userSlice";

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));

                // Check if the user is on the home page or login page
                if (location.pathname === "/" || location.pathname === "/login") {
                    navigate("/browse");
                }
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsubscribe when component unmounts.
        return () => unsubscribe();
    }, [dispatch, navigate, location]);

    return (
        <div>
            <Outlet />
            <Toaster />
        </div>
    );
}

export default App;
