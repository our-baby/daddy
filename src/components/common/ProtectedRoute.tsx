import { User } from '@/types/user';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  user: User | null;
  redirectPath?: string;
  children: ReactNode;
}

const ProtectedRoute = ({ user, redirectPath = '/', children }: Props) => {
  console.log(user);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

export default ProtectedRoute;
