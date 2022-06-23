import { Navigate, useRoutes } from "react-router-dom";
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login />}
      ]
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}