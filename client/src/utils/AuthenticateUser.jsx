import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
// Context
import { UserContext } from '../context/UserContext';
// Utils
import LoggedInUser from './LoggedInUser';

export function AuthenticateUser({ children, redirectPath = '/' }) {
  if (!LoggedInUser()) {
    return <Navigate to={redirectPath} replace />;
  } else {
    return <>{children}</>;
  }
}

export function AuthenticateAdmin({ children, redirectPath = '/' }) {
  const { user } = useContext(UserContext);
  if (user.role !== 'ADMIN' && user.role !== 'DEVELOPER') {
    return <Navigate to={redirectPath} replace />;
  } else {
    return <>{children}</>;
  }
}

export function AuthenticateDeveloper({ children, redirectPath = '/' }) {
  const { user } = useContext(UserContext);
  if (user.role !== 'DEVELOPER') {
    return <Navigate to={redirectPath} replace />;
  } else {
    return <>{children}</>;
  }
}
