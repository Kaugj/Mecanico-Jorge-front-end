import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

/**
 * Guarda de rota da ÁREA PRIVADA.
 * Logado → renderiza as rotas filhas (<Outlet />).
 * Não logado → manda para /login guardando a página pedida em `state.from`
 * (o LoginForm usa isso para voltar depois do login).
 */
export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAuthenticated) return <Navigate to="/login" state={{ from: location }} replace />;
  return <Outlet />;
}
