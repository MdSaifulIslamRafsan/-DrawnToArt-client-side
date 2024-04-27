import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import loader from "../../assets/loading.json";
import Lottie from "lottie-react";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="grid place-content-center h-screen">
        <Lottie className="h-40 w-40" animationData={loader} loop={true} />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
