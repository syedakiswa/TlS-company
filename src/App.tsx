import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import routes from './routes';

import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { AuthProvider } from '@/contexts/AuthContext';
import { RouteGuard } from '@/components/common/RouteGuard';
import { Toaster } from '@/components/ui/toaster';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <RouteGuard>
          <div className="flex min-h-screen flex-col">
            <Routes>
              {routes.map((route, index) => {
                // Admin routes don't need header/footer
                if (route.path.startsWith('/admin')) {
                  return (
                    <Route key={index} path={route.path} element={route.element}>
                      {route.children?.map((child, childIndex) => (
                        <Route
                          key={childIndex}
                          path={child.path}
                          element={child.element}
                        />
                      ))}
                    </Route>
                  );
                }
                // Login page doesn't need header/footer
                if (route.path === '/login') {
                  return <Route key={index} path={route.path} element={route.element} />;
                }
                // Public pages with header/footer
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <>
                        <Header />
                        <main className="flex-1">{route.element}</main>
                        <Footer />
                      </>
                    }
                  />
                );
              })}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Toaster />
        </RouteGuard>
      </AuthProvider>
    </Router>
  );
};

export default App;
