// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Z44cCA0X3O3IB6AsGG_cYFc8ybmPy70",
  authDomain: "crudweb2-22611.firebaseapp.com",
  projectId: "crudweb2-22611",
  storageBucket: "crudweb2-22611.appspot.com",
  messagingSenderId: "952989210713",
  appId: "1:952989210713:web:6e0977f1aba4ea9281b948",
  measurementId: "G-G06WY5JLBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);