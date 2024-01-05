// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmZN2GMoDTwW2xi3bEJwEzHt51D_kx_to",
    authDomain: "propertywebsite-39b30.firebaseapp.com",
    projectId: "propertywebsite-39b30",
    storageBucket: "propertywebsite-39b30.appspot.com",
    messagingSenderId: "861066291532",
    appId: "1:861066291532:web:07bc3c09a36fa8038087e9",
    measurementId: "G-SJ2EHPKF97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);