/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";

import AuthContext from "./authContext";
import app from "../firebase/firebase.config";
import { redirect } from "react-router-dom";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((r) => {
        console.log(r);
      })
      .catch(() => {});
  };

  const loginInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e.code);
        console.log(e.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  };

  const profileUpdate = (user) => {};

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
    loginInWithGoogle,
    loginInWithGithub,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
