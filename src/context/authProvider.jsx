/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";

import AuthContext from "./authContext";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const register = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {};
  const signInWithGithub = () => {};
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  };

  useEffect(() => {
    const unsubsciber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubsciber();
    };
  }, []);
  const authInfo = {
    loading,
    user,
    register,
    login,
    signInWithGoogle,
    signInWithGithub,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
