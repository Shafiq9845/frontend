import { Navigate } from 'react-router-dom';
import { useAuth } from './context/authContext';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;
