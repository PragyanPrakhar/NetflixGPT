import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { Toaster } from 'react-hot-toast';
import { addUser,removeUser } from "./utils/userSlice";
function App() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    useEffect(() => {
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        //Unsubscribe when component unmounts.
        return ()=>  unsubscribe();
    },[]);

    return (
        <div>
            <Outlet />
            <Toaster />
        </div>
    );
}

export default App;

//Completed till 3 hr 20 minutes