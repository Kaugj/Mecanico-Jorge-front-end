import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from '../components/ScrollToTop';

/**
 * Moldura das telas de CONTA (login e área privada): cabeçalho com ícones
 * (busca/carrinho/whatsapp) e rodapé de direitos reservados, como no design.
 */
export default function AccountLayout() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header variant="account" />
      <main><Outlet /></main>
      <Footer variant="copyright" />
    </div>
  );
}
