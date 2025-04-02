import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRouter({ children, isAllowed, redirectTo = '/login' }) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />;
  }
  
  return children || <Outlet />;
}