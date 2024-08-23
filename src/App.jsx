import Body from "./components/Body";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "./utils/userSlice";
function App() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email,displayName,photoURL} = user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
    },[]);

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default App;

//Completed till 3 hr 20 minutes