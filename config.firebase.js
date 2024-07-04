// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADHLQf0W7iKrWnghAa3ZumLsRAPXex0uE",
  authDomain: "soconoar-40951.firebaseapp.com",
  projectId: "soconoar-40951",
  storageBucket: "soconoar-40951.appspot.com",
  messagingSenderId: "463393288342",
  appId: "1:463393288342:web:58759e0989e52acd9512b7",
  measurementId: "G-23216RN03K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getauth(app)

export {app}