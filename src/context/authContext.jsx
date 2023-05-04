import React from "react";

const AuthContext = React.createContext({
  loading: true,
  user: "",
  register: () => {},
  login: () => {},
  loginInWithGoogle: () => {},
  loginInWithGithub: () => {},
  logout: () => {},
});

export default AuthContext;
