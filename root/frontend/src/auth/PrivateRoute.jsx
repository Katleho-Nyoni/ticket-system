import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from './authenticate';

export const PrivateRoute = () => {
    const { user, isLoading } = useUser();  
    if (isLoading) return null;
    return user ? <Outlet /> : <Navigate to="/user/login" replace />;
}