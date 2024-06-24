import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '@/layouts';
import Home from '@/pages/home';

const Routes = () => {
  const routes = [
    {
      path: '/',
      element: <Layout />,
      //   errorElement: <NotFound />,
      children: [{ index: true, element: <Home /> }],
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};

export default Routes;
