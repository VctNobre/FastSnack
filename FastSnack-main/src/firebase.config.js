// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCrT0vmTP-pgEufhWET1D2bU7XfKAREF7A",
  authDomain: "login-eat-smart.firebaseapp.com",
  projectId: "login-eat-smart",
  storageBucket: "login-eat-smart.appspot.com",
  messagingSenderId: "1076003551584",
  appId: "1:1076003551584:web:4a107d5e3ff61a76ec0605",
  measurementId: "G-YZSSBHLXGE"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);