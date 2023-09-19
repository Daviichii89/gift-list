// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgf0bTghW1Y6uzsrqOZf25aLCSOGJkEXc",
  authDomain: "listado-regalos-fanny.firebaseapp.com",
  projectId: "listado-regalos-fanny",
  storageBucket: "listado-regalos-fanny.appspot.com",
  messagingSenderId: "76719017863",
  appId: "1:76719017863:web:4ff4bc794beafe2b65cd22"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const db = getFirestore(app);

