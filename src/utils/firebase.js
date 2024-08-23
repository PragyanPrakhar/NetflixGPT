// Import the functions you need from the SDKs you need
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ3C_SFza9D-oWgDXN38RkbpGYFH6UF4A",
  authDomain: "netflixgpt-168bd.firebaseapp.com",
  projectId: "netflixgpt-168bd",
  storageBucket: "netflixgpt-168bd.appspot.com",
  messagingSenderId: "598673627574",
  appId: "1:598673627574:web:a03897d922eba72a7f4917",
  measurementId: "G-FZGCDTY6C5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
