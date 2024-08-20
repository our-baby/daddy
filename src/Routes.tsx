import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '@/layouts';
import Home from '@/pages/home';
import Mypage from '@/pages/mypage';
import NaverCallBack from './layouts/header/sns_login/NaverCallBack';
import { User } from './types/user';
import ProtectedRoute from './components/common/ProtectedRoute';

type UserProps = {
  user: User | null;
};

const Routes = ({ user }: UserProps) => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      //   errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/mypage',
          element: (
            <ProtectedRoute user={user}>
              <Mypage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    { path: '/login/oauth2/code/naver', element: <NaverCallBack /> },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Routes;
