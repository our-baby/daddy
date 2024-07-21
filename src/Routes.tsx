import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '@/layouts';
import Home from '@/pages/home';
import NaverCallBack from './layouts/header/sns_login/NaverCallBack';

const Routes = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      //   errorElement: <NotFound />,
      children: [{ index: true, element: <Home /> }],
    },
    { path: '/login/oauth2/code/naver', element: <NaverCallBack /> },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Routes;
