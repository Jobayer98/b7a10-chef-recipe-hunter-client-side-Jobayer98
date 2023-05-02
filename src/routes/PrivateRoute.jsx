/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = "user";

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
