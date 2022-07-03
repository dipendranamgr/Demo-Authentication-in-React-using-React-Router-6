import { NavLink } from "react-router-dom";
import React from 'react';
import { useAuth } from "../hooks/useAuth";

export const Home = ()=>{

    const {token,onLogin} =  useAuth();
    return(
        <>
            <h2>Home Page</h2>
        {!token && (<button type="button" onClick={onLogin} >Sign In</button>)};
            
        </>
    );
};

export const Dashboard = () =>{
    const {token} = useAuth();
    return(
        <>
            <h2>Dashboard Page {token}</h2>
        </>
    );
};

export const Admin = () => {
    return (
        <>
            <h2>Admin Page</h2>
        </>
    );
};

export const Navigation= () =>{
    const {token,onLogout} = useAuth();
    return (
        <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/admin">Admin</NavLink>
            {token && (<button type="button" onClick={onLogout}>Sign Out</button>)};            
        </nav>
    );
};