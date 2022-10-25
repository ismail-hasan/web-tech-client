import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../FireBase/FireBase.init";
import { useEffect } from "react";
import { useState } from "react";

export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const Auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const createUserWithPassword = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const signInWithPassword = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currenUser) => {
      console.log("check the user", currenUser);
      setUser(currenUser);
    });
    return () => unsubscribe();
  }, []);

  const logOut = () => {
    signOut(Auth);
  };

  const userInfo = { user, logOut, signInWithPassword, createUserWithPassword };

  return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default ContextProvider;
