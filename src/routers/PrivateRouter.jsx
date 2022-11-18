import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  return <div>{currentUser ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
