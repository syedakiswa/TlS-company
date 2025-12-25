import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import LoginPage from './pages/LoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSubmissions from './pages/admin/AdminSubmissions';
import AdminSettings from './pages/admin/AdminSettings';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'About',
    path: '/about',
    element: <AboutPage />,
  },
  {
    name: 'Services',
    path: '/services',
    element: <ServicesPage />,
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <ContactPage />,
  },
  {
    name: 'Quote',
    path: '/quote',
    element: <QuotePage />,
  },
  {
    name: 'Login',
    path: '/login',
    element: <LoginPage />,
  },
  {
    name: 'Admin',
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        name: 'Dashboard',
        path: '',
        element: <AdminDashboard />,
      },
      {
        name: 'Submissions',
        path: 'submissions',
        element: <AdminSubmissions />,
      },
      {
        name: 'Settings',
        path: 'settings',
        element: <AdminSettings />,
      },
    ],
  },
];

export default routes;
