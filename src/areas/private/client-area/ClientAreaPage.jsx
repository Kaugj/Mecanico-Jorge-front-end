import { Package, CalendarCheck, UserRound } from 'lucide-react';
import Button from '@/shared/components/Button/Button';
import { useAuth } from '@/shared/auth/AuthContext';
import ClientAreaHeader from './ClientAreaHeader/ClientAreaHeader';
import ClientSection from './ClientSection/ClientSection';
import './ClientAreaPage.css';

/**
 * Área do cliente (PRIVADA — protegida por ProtectedRoute).
 * Reúne as 3 seções prometidas na tela de login: pedidos, agendamentos e dados.
 * TODO: trocar os estados vazios por dados reais vindos da API.
 */
export default function ClientAreaPage() {
  const { user } = useAuth();

  return (
    <section className="client-area container">
      <ClientAreaHeader />

      <div className="client-area__grid">
        <ClientSection icon={Package} title="Meus pedidos" emptyText="Você ainda não fez nenhum pedido.">
          <Button to="/produtos" variant="outline">Ver produtos</Button>
        </ClientSection>

        <ClientSection icon={CalendarCheck} title="Meus agendamentos" emptyText="Nenhum serviço agendado.">
          <Button to="/contato" variant="outline">Agendar serviço</Button>
        </ClientSection>

        <ClientSection icon={UserRound} title="Meus dados">
          <dl className="client-area__data">
            <dt>Nome</dt><dd>{user?.name || 'Não informado'}</dd>
            <dt>E-mail</dt><dd>{user?.email}</dd>
          </dl>
        </ClientSection>
      </div>
    </section>
  );
}
