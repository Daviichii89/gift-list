/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
//@ts-nocheck
import {
  GoogleAuthProvider,
  // createUserWithEmailAndPassword,
  onAuthStateChanged,
  // signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // const signup = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };
  // const login = (email, password) => {
  //   return signInWithEmailAndPassword(auth, email, password);
  // };
  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }
  return (
    <authContext.Provider value={{ user, loading, loginWithGoogle }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
