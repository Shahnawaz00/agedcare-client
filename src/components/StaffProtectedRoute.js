import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const StaffProtectedRoute = ({ children }) => {
    const { user } = useAuth();
  
    if (!user) {
      // User is not authenticated
      return <Navigate to="/" />;
    }
  
    // Check if the user belongs to Staff model
    if (user.staff_id !== undefined) {
      // User is staff, allow access
      return children;
    }
  
    // Redirect user to unauthorized page or home page
    return <Navigate to="/unauthorized" />;
  };