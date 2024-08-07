//@ts-nocheck
import { Navigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="m-auto h-full w-full text-center"><h1 className="text-4xl">Cargando...</h1></div>
  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default ProtectedRoute;
