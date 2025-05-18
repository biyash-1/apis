// src/components/PublicRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '@/store/auth';

const PublicRoute = () => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  // If already logged in, send them to /dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // Otherwise, render the public page (login, signup, etc.)
  return <Outlet />;
};

export default PublicRoute;
