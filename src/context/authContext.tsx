import { createContext } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const user = {
    login: true,
  };
  const signup = (email, password) => {};
  return (
    <authContext.Provider value={{ user }}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
