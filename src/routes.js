import { Navigate, useRoutes } from "react-router-dom";
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import DashboardLayout from "./layouts/dashboard";
//
import Login from './pages/Login';
import DashboardApp from './pages/DashboardApp';
import Assets from './pages/Assets';
import Reports from './pages/Reports';
import RCFA from './pages/RCFA';
import Users from './pages/Users';

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
        { path: 'assets', element: <Assets /> },
        { path: 'reports', element: <Reports /> },
        { path: 'rcfa', element: <RCFA /> },
        { path: 'users', element: <Users /> }
      ]
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}