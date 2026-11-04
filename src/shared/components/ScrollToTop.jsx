import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Rola a página para o topo sempre que a rota muda
 * (sem isso, o React Router mantém a posição de scroll anterior).
 * Não renderiza nada na tela.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
