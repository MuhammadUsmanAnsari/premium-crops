// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjd0P9Y-gdZkyuFR8RdUo-cZ81-xdCkxs",
  authDomain: "premium-crops.firebaseapp.com",
  projectId: "premium-crops",
  storageBucket: "premium-crops.appspot.com",
  messagingSenderId: "647215170863",
  appId: "1:647215170863:web:bf7567a1d02b150bfacdda",
  measurementId: "G-60WS0SVS7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export {analytics,auth}