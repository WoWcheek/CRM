import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    return isLoggedIn() ? children : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
