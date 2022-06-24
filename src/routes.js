import { Navigate, useRoutes } from "react-router-dom";
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import DashboardLayout from "./layouts/dashboard";
//
import Login from './pages/Login';
import DashboardApp from './pages/DashboardApp';

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
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
      ]
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}