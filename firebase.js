// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZUPI-gPp8IOUQVybFtXT7yauGEjw46Fo",
  authDomain: "flashcardsaas-394b6.firebaseapp.com",
  projectId: "flashcardsaas-394b6",
  storageBucket: "flashcardsaas-394b6.appspot.com",
  messagingSenderId: "186521506110",
  appId: "1:186521506110:web:c2ff097a569ed699375c6f",
  measurementId: "G-MHJM2XS320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}