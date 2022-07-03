import React from 'react';
import { fake } from '../authenticate/fake';
import {useNavigate,useLocation} from 'react-router-dom';

const AuthContext = React.createContext(null);

export const AuthProvider =({children})=>{

    const location = useLocation();

    const navigate = useNavigate();
    const [token, setToken] = React.useState(null);

    const handleLogin=async ()=>{
    const token = await fake();
    console.log(token);
    setToken(token);
    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);
    };

    const handleLogout=()=>{
    setToken(null);
    };

    const value={
        token,
        onLogin:handleLogin,
        onLogout:handleLogout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export const useAuth=()=>{
    return React.useContext(AuthContext);
};