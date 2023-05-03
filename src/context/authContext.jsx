import React from "react";

const AuthContext = React.createContext({
  loading: true,
  user: "",
  register: () => {},
  login: () => {},
  signInWithGoogle: () => {},
  signInWithGithub: () => {},
  logout: () => {},
});

export default AuthContext;
