
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCgf0bTghW1Y6uzsrqOZf25aLCSOGJkEXc",
  authDomain: "listado-regalos-fanny.firebaseapp.com",
  databaseURL: "https://listado-regalos-fanny-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "listado-regalos-fanny",
  storageBucket: "listado-regalos-fanny.appspot.com",
  messagingSenderId: "76719017863",
  appId: "1:76719017863:web:4ff4bc794beafe2b65cd22"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

