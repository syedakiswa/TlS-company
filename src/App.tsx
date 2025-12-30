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
// src/App.tsx
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from './components/ProtectedRoute';
// import LoginPage from './pages/LoginPage';
// import AdminDashboard from './pages/admin/AdminDashboard';
// import { Header } from '@/components/layouts/Header';
// import { Footer } from '@/components/layouts/Footer';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// // ... other imports

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/login" element={<LoginPage />} />
        
//         {/* Protected routes */}
//         <Route 
//           path="/admin" 
//           element={
//             <ProtectedRoute>
//               <AdminDashboard />
//             </ProtectedRoute>
//           } 
//         />
        
//         <Route 
//           path="/dashboard" 
//           element={
//             <ProtectedRoute>
//               <AdminDashboard/>
//             </ProtectedRoute>
//           } 
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;