// Import the functions you need from the SDKs you need

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkJbcf7zWf0lR-HZFUreG3vaSqiqEhhQc",
  authDomain: "netflixgpt-2eaec.firebaseapp.com",
  projectId: "netflixgpt-2eaec",
  storageBucket: "netflixgpt-2eaec.appspot.com",
  messagingSenderId: "473611449019",
  appId: "1:473611449019:web:32aa34f79b9e244adfaf9e",
  measurementId: "G-Q355YBRBN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();