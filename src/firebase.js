// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZVXBZLjORnClhIA8T6HADbGlvsE89kX4",
    authDomain: "bmical-ccd8a.firebaseapp.com",
    projectId: "bmical-ccd8a",
    storageBucket: "bmical-ccd8a.appspot.com",
    messagingSenderId: "897303481517",
    appId: "1:897303481517:web:0a9db046f6f1af5adf0a24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;