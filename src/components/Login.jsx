import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { BG_URL } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const dispatch = useDispatch();
    const handleButtonClick = () => {
        //validate the form data
        let msg = "";
        if (isSignInForm) {
            msg = checkValidData(
                email.current.value,
                password.current.value,
                "naam"
            );
        } else {
            msg = checkValidData(
                email.current.value,
                password.current.value,
                name.current.value
            );
        }

        setErrorMessage(msg);
        if (msg) return;
        //Sign In Sign Up Logic
        if (!isSignInForm) {
            //SignUp Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                    })
                        .then(() => {
                            // Profile updated!
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                        });
                    // console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        } else {
            //SignIn Logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header />
            <div className="absolute bg-black  ">
                <img className="w-screen h-screen object-cover " src={BG_URL} alt="image" />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
            >
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-700"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700"
                />
                <p className="text-red-500 text-lg font-bold py-2">
                    {errorMessage}
                </p>
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm
                        ? " New to Netflix? Sign Up Now"
                        : "Already registered? Sign In Now."}
                </p>
            </form>
        </div>
    );
};

export default Login;

//1 hr 56 mins completed
