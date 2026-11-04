import { Routes, Route } from 'react-router-dom';
import PublicLayout from '@/shared/layouts/PublicLayout';
import AccountLayout from '@/shared/layouts/AccountLayout';
import ProtectedRoute from '@/shared/auth/ProtectedRoute';

// Área pública
import HomePage from '@/areas/public/home/HomePage';
import AboutPage from '@/areas/public/about/AboutPage';
import ServicesPage from '@/areas/public/services/ServicesPage';
import ProductsPage from '@/areas/public/products/ProductsPage';
import ContactPage from '@/areas/public/contact/ContactPage';
import LoginPage from '@/areas/public/login/LoginPage';
import NotFoundPage from '@/areas/public/NotFoundPage';

// Área privada
import ClientAreaPage from '@/areas/private/client-area/ClientAreaPage';

/**
 * Mapa de rotas do site, dividido por área:
 *  1) PÚBLICAS  (PublicLayout)  → qualquer visitante
 *  2) CONTA     (AccountLayout) → /login (público) e /conta (PRIVADA, exige login)
 */
export default function App() {
  return (
    <Routes>
      {/* ---------- Área pública ---------- */}
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="servicos" element={<ServicesPage />} />
        <Route path="produtos" element={<ProductsPage />} />
        <Route path="contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      {/* ---------- Login + área privada ---------- */}
      <Route element={<AccountLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="conta" element={<ClientAreaPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
