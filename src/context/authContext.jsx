import React from "react";

const AuthContext = React.createContext({
  loading: true,
  user: "",
  createUser: () => {},
  login: () => {},
  signInWithGoogle: () => {},
  signInWithGithub: () => {},
  logout: () => {},
});

export default AuthContext;
