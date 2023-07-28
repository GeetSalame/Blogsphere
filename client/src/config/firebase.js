// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-fi_RaiJA490APHpcv8rnrB501OI0Tu0",
    authDomain: "blogsphereauth.firebaseapp.com",
    projectId: "blogsphereauth",
    storageBucket: "blogsphereauth.appspot.com",
    messagingSenderId: "82732918386",
    appId: "1:82732918386:web:d64121c242e4d54bdfc4eb",
    measurementId: "G-W368QTBN7Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();