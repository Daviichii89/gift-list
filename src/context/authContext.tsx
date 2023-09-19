import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  return (
    <authContext.Provider value={{ signup, login }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
