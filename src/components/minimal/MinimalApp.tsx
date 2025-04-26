// src/MinimalApp.tsx
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import BirthdayInvitation from './BirthdayInvitation';
import Admin from '../../Admin';
import Login from '../../Login';
import Registration from '../../Registration';
import {AuthProvider, useAuth} from '../../AuthContext';

// Componente per proteggere le route di base (richiede autenticazione)
// interface ProtectedRouteProps {
//   element: React.ReactNode;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({element}) => {
//   const {currentUser, loading} = useAuth();

//   if (loading) {
//     return <div>Caricamento...</div>;
//   }

//   return currentUser ? <>{element}</> : <Navigate to='/login' replace />;
// };

// Componente per proteggere le route admin (richiede ruolo admin)
interface AdminRouteProps {
  element: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({element}) => {
  const {currentUser, isAdmin, loading} = useAuth();

  if (loading) {
    return <div>Caricamento...</div>;
  }

  return currentUser && isAdmin ? <>{element}</> : <Navigate to='/' replace />;
};

const AppRoutes: React.FC = () => {
  const auth = useAuth();

  // Se l'utente non è autenticato, mostra solo login e registrazione
  if (!auth.currentUser) {
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    );
  }

  // Altrimenti, mostra le rotte basate sul ruolo dell'utente
  return (
    <Routes>
      <Route path='/' element={<BirthdayInvitation />} />
      <Route path='/login' element={<Navigate to='/' replace />} />
      <Route path='/register' element={<Navigate to='/' replace />} />
      <Route path='/admin' element={<AdminRoute element={<Admin />} />} />
    </Routes>
  );
};

// Wrapper per l'app
const MinimalApp: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default MinimalApp;
