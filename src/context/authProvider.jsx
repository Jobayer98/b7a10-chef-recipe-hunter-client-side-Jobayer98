/* eslint-disable react/prop-types */
// import { useState } from "react";
import AuthContext from "./authContext";

const AuthProvider = ({ children }) => {
  //   const [loading, setLoading] = useState(true);
  //   const [user, setUser] = useState(null);

  //   const authInfo = {
  //     loading,
  //     user,
  //     createUser,
  //     login,
  //     signInWithGoogle,
  //     signInWithGithub,
  //     logout,
  //   };
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
