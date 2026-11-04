import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { login } from './authService';

const STORAGE_KEY = 'mj:user';
const AuthContext = createContext(null);

/**
 * Lê o usuário salvo no navegador (se houver), para manter o login ao recarregar.
 * @returns {object|null}
 */
function readStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}

/**
 * Provedor de autenticação: guarda quem está logado e expõe signIn/signOut
 * para todo o app. Deve envolver as rotas (veja main.jsx).
 * SEGURANÇA: aqui guardamos só dados de exibição (nome/e-mail). O token de
 * sessão real deve ficar em cookie httpOnly definido pelo back-end.
 */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(readStoredUser);

  // Faz login na API e guarda o usuário retornado
  const signIn = useCallback(async (credentials) => {
    const data = await login(credentials);
    const loggedUser = data?.user ?? { email: credentials.email };
    setUser(loggedUser);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(loggedUser)); } catch { /* ignora */ }
    return loggedUser;
  }, []);

  // Encerra a sessão local
  const signOut = useCallback(() => {
    setUser(null);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignora */ }
  }, []);

  const value = useMemo(() => ({ user, isAuthenticated: !!user, signIn, signOut }), [user, signIn, signOut]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook para acessar a sessão em qualquer componente:
 * const { user, isAuthenticated, signIn, signOut } = useAuth();
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de <AuthProvider>.');
  return context;
}
