import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';

/**
 * Moldura das páginas PÚBLICAS: cabeçalho com botão CONTATO + rodapé com redes.
 * <Outlet /> é onde a página da rota atual aparece.
 */
export default function PublicLayout() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header variant="default" />
      <main><Outlet /></main>
      <Footer variant="social" />
    </div>
  );
}
