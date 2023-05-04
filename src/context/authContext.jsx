/* eslint-disable no-unused-vars */
import React from "react";

const AuthContext = React.createContext({
  loading: true,
  user: "",
  register: (email, password) => {},
  login: () => {},
  loginInWithGoogle: () => {},
  loginInWithGithub: () => {},
  logout: () => {},
});

export default AuthContext;
