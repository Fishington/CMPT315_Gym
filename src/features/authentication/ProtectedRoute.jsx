import React from 'react';
import { Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.auth.user);

    // If user is not logged in, redirect to the login page
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // If user is logged in, render the protected component
    return children;
};

export default ProtectedRoute;