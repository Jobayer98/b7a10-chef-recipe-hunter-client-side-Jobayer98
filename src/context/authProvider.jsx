/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AuthContext from "./authContext";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const register = (name, email, password) => {};

  const login = (email, password) => {};

  const signInWithGoogle = () => {};

  const signInWithGithub = () => {};

  const logout = () => {};

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
