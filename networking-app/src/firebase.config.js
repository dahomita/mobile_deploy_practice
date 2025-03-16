// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-k7-PgvFtU9XK5va536Wovpb_Ft2QbDM",
  authDomain: "networkingapp-9cf79.firebaseapp.com",
  projectId: "networkingapp-9cf79",
  storageBucket: "networkingapp-9cf79.firebasestorage.app",
  messagingSenderId: "734132695320",
  appId: "1:734132695320:web:5cb3104015de4c5b706e6d",
  measurementId: "G-SQNS21V8P5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);