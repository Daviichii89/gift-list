/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
//@ts-nocheck
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      console.log(currentUser)
      setUser(currentUser)
    })
  }, [])
  
  return (
    <authContext.Provider value={{ signup, login, user }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
