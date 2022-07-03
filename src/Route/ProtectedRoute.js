import React from 'react'
import { useAuth } from '../hooks/useAuth'
import {Navigate,useLocation} from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    const location = useLocation();
    const {token} = useAuth();

    if(!token)
        return <Navigate to="/home" replace state={{from:location}}/>;
  
    return children;
}
