import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import LoginPage from './pages/LoginPage';

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

  

];

export default routes;
