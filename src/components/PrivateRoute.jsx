import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="text-center text-purple-500">Checking access...</p>;
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
