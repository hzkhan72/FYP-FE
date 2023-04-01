// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5An-GL7mZ_Q_HiEESf6Mt0iX1nPoNQCw",
  authDomain: "ts-dce47.firebaseapp.com",
  projectId: "ts-dce47",
  storageBucket: "ts-dce47.appspot.com",
  messagingSenderId: "498714724277",
  appId: "1:498714724277:web:f6a39e1148c988dbbd7bfc",
  measurementId: "G-SCDMTXJSVX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
