// PrivateRoute.jsx
import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="flex justify-center my-10"><span className="loading loading-spinner loading-lg"></span></div>;
  }

  if (user) {
    return children;
  }

  // Preserve the page the user was trying to visit
  return <Navigate state={{ from: location }} to="/auth/login" replace />;;
};

export default PrivateRoute;