// src/components/ProtectedRoute.tsx
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
}

// Helper functions
export function getCurrentUser() {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
}

export function logout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isLoggedIn');
  window.location.href = '/login';
}

export function isAuthenticated() {
  return localStorage.getItem('isLoggedIn') === 'true';
}